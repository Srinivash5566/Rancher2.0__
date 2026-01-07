const express = require("express");
const router = express.Router();
const UserMsg = require("../models/userMsg.model");

function generateTimeId() {
  const now = new Date();

  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const MM = String(now.getMonth() + 1).padStart(2, "0");
  const yy = String(now.getFullYear()).slice(-2);

  return `${hh}${mm}${ss}${dd}${MM}${yy}`;
}

// POST route for creating a new message
router.post("/Msg", async (req, res) => {
  const { userName, Msg } = req.body;
  const apiKey =
    "________________________Enter The Api Key________________________";
  const model = "models/gemini-2.5-flash";
  try {
    const newUserMsg = new UserMsg({ msgId: generateTimeId(), userName, Msg });
    await newUserMsg.save();
    const prompt = `
You are an agricultural expert AI assistant. 
The user has described an agricultural problem below.

Problem:
"${Msg}"

Your task:
1. Analyze the problem carefully.
2. Provide a clear, practical solution related to agriculture.
3. If the question is not related to agriculture, respond exactly with: "give agri oriented".
4. Format the output cleanly using plain text only (no bold, no Markdown).
5. Use '\\n' to indicate new lines instead of actual line breaks.
6. Structure your response as follows:
- Problem Summary: ...
- Possible Causes: ...
- Recommended Solution: ...
- Additional Tips: ...
`;

    const AIres = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await AIres.json();
    const answer =
      data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
    console.log(answer);
    const newAIMsg = new UserMsg({
      msgId: generateTimeId(),
      userName: "RancherAI",
      Msg: answer,
    });
    await newAIMsg.save();
    res.json({ newUserMsg, newAIMsg });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// DELETE route for deleting a message by msgId
router.delete("/msgDel", async (req, res) => {
  const { id } = req.body;
  try {
    const msg = await UserMsg.findOne({ msgId: id });
    if (!msg) {
      return res.status(404).json({ message: "Message not found" });
    }
    await msg.deleteOne();
    res.json({ message: "Message deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// GET route for retrieving all messages
router.get("/getMsg", async (req, res) => {
  try {
    const msgs = await UserMsg.find();
    res.json(msgs);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

module.exports = router;
