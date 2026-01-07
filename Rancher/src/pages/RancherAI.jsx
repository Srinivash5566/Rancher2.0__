import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import component from "./stylesheet/component.module.css";
import api from "../api";
import { MdDelete } from "react-icons/md";
import { useAuth } from "../AuthContext";
import Theme from "../multfun/Theme";

const Community = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { isLoggedIn, logout } = useAuth(); // Access isLoggedIn and logout from context
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState("");

  // Check if user is logged in and load messages
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/userMsg/getMsg");
        setMessages(res.data);
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };
    fetchData();
  }, []);

  const handleSendMessage = async () => {
    if (!isLoggedIn) {
      alert("You need to be logged in to send messages");
      return;
    }
    if (newMessage.trim()) {
      const newMsg = {
        msgId:
          messages.length > 0
            ? Number(messages[messages.length - 1].msgId) + 1
            : 1,
        userName: localStorage.getItem("userName"),
        Msg: newMessage,
      };
      try {
        await api.post("/userMsg/Msg", newMsg);
        const res = await api.get("/userMsg/getMsg");
        console.log(res);

        setMessages(res.data);
        setNewMessage("");
      } catch (err) {
        console.error("Error sending message:", err);
        alert("Failed to send message");
      }
    }
  };

  const delMsg = async (id) => {
    try {
      const res = await api.delete("/userMsg/msgDel", { data: { id } });
      alert(res.data.message);
      setMessages(messages.filter((msg) => msg.msgId !== id));
    } catch (err) {
      console.error("Error deleting message:", err);
      alert("Failed to delete message");
    }
  };

  return (
    <div className={component.community}>
      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="logo">🌱 FarmFusion AI</div>

        <div className="icbtmBox">
          <Theme />
          <div className="auth-buttons">
            {isLoggedIn ? (
              <button className="log-out" onClick={logout}>
                Log Out
              </button>
            ) : (
              <>
                <button
                  className="sign-in"
                  onClick={() => navigate("/RegisterPage")}
                >
                  Sign Up
                </button>
                <button
                  className="log-in"
                  onClick={() => navigate("/LoginPage")}
                >
                  Log In
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* ================= NAV ================= */}
      <nav className={component.nav_bar}>
        <Link to="/" className={component.nav_link_in}>
          RancherAI
        </Link>
        <Link to="/RancherBuySeeds" className={component.nav_link}>
          AgriKart
        </Link>
        <Link to="/HarvestingEngines" className={component.nav_link}>
          Harvesting Engines
        </Link>
      </nav>

      {/* ================= CHAT AREA ================= */}
      <div className={component.chat_container}>
        {/* Welcome message */}
        {messages.length === 0 && (
          <div className={component.chat_message}>
            <div className={component.message_header}>🌱 FarmFusion AI</div>
            <div className={component.message_body}>
              Hello Farmer 👋 <br />I can help you with crop selection, soil
              health, pests, irrigation, weather insights, and farming
              equipment.
            </div>
          </div>
        )}

        {/* Chat Messages */}
        {messages.map((msg) => {
          const isUser = msg.userName === localStorage.getItem("userName");

          return (
            <div
              key={msg.msgId}
              className={
                isUser ? component.user_message : component.chat_message
              }
            >
              <div className={component.message_header}>
                {isUser ? "👨‍🌾 You" : "🌱 FarmFusion AI / Community"}

                {isUser && (
                  <MdDelete
                    onClick={() => delMsg(msg.msgId)}
                    style={{ cursor: "pointer", marginLeft: "8px" }}
                    title="Delete message"
                  />
                )}
              </div>

              <div className={component.message_body}>{msg.Msg}</div>
            </div>
          );
        })}
      </div>

      {/* ================= INPUT ================= */}
      <div className={component.message_input_container}>
        <input
          type="text"
          placeholder="Ask FarmFusion AI about crops, soil, weather, pests..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Community;
