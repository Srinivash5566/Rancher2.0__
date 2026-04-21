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
  const { isLoggedIn, logout } = useAuth();
  const [loading, setLoading] = useState(null);

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

  const handleSendMessage = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!isLoggedIn) {
      alert("You need to be logged in to send messages");
      return;
    }
    if (newMessage.trim()) {
      setLoading("Loading...");
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
        setMessages(res.data);
        setNewMessage("");
      } catch (err) {
        console.error("Error sending message:", err);
        alert("Failed to send message");
      } finally {
        setLoading(null);
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
      {loading && (
        <div className={component.model} role="alert" aria-busy="true">
          <div className={component.overlayDiv}>
            <h1 className={component.loading}>{loading}</h1>
          </div>
        </div>
      )}
      <header className="header">
        <div className="logo">Rancher</div>
        <div className="icbtmBox">
          <Theme />
          <nav className="auth-buttons" aria-label="Authentication">
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
          </nav>
        </div>
      </header>

      <nav className={component.nav_bar} aria-label="Main Navigation">
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

      <main className={component.chat_container} role="log" aria-live="polite">
        {messages.length === 0 && (
          <article className={component.chat_message}>
            <header className={component.message_header}>Rancher</header>
            <div className={component.message_body}>
              Hello Farmer 👋 <br />I can help you with crop selection, soil
              health, pests, irrigation, weather insights, and farming
              equipment.
            </div>
          </article>
        )}

        {messages.map((msg) => {
          const isUser = msg.userName === localStorage.getItem("userName");
          return (
            <article
              key={msg.msgId}
              className={
                isUser ? component.user_message : component.chat_message
              }
            >
              <header className={component.message_header}>
                {isUser ? "👨‍🌾 You" : "✨Rancher"}
                {isUser && (
                  <MdDelete
                    onClick={() => delMsg(msg.msgId)}
                    style={{
                      cursor: "pointer",
                      marginLeft: "8px",
                      fontSize: "16px",
                    }}
                    title="Delete message"
                    aria-label="Delete your message"
                    role="button"
                    tabIndex={0}
                  />
                )}
              </header>
              <div className={component.message_body}>{msg.Msg}</div>
            </article>
          );
        })}
      </main>

      <section aria-label="Message Input Area">
        <form
          className={component.message_input_container}
          onSubmit={handleSendMessage}
        >
          <input
            type="text"
            placeholder="Ask Rancher AI about crops, soil, weather, pests..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            aria-label="New message input"
          />
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default Community;
