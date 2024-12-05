import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import component from "./stylesheet/component.module.css";
import api from "../api";
import { MdDelete } from "react-icons/md";
import { useAuth } from "../AuthContext";

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
      <header className="header">
        <div className="logo">Rancher</div>
        <input
          type="text"
          placeholder="Type to Search..."
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
        />
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
              <button className="log-in" onClick={() => navigate("/LoginPage")}>
                Log In
              </button>
            </>
          )}
        </div>
      </header>

      <nav className={component.nav_bar}>
        <Link to="/" className={component.nav_link}>
          Home
        </Link>
        <Link to="/HarvestingEngines" className={component.nav_link}>
          Harvesting Engines
        </Link>
        <Link to="/Community" className={component.nav_link_in}>
          Community
        </Link>
        {/* <Link to="#" className={component.nav_link}>
          About
        </Link> */}
      </nav>

      <div className={component.chat_container}>
        {messages.map((msg) => (
          <div
            key={msg.msgId}
            className={`${
              msg.userName === localStorage.getItem("userName")
                ? component.user_message
                : component.chat_message
            }`}
          >
            <div className={component.message_header}>
              ~ {msg.userName}
              {msg.userName === localStorage.getItem("userName") && (
                <MdDelete
                  onClick={() => delMsg(msg.msgId)}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                />
              )}
            </div>
            <div className={component.message_body}>{msg.Msg}</div>
          </div>
        ))}
      </div>
      <div className={component.message_input_container}>
        <input
          type="text"
          placeholder="Type your question"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Community;
