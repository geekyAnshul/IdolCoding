
// Import necessary libraries
import React, { useState } from 'react';
import { FcVideoCall } from "react-icons/fc";
import { IoCallOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { RiCameraAiLine } from "react-icons/ri";
import { FaMicrophoneAlt } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiCandles } from "react-icons/bi";
import { Plus } from 'lucide-react';

const Messages = () => {
    const [chats, setChats] = useState([
        { id: 1, name: 'Himanshu Gupta', message: 'Lorem ipsum dolor sit amet, consectetur adi...', time: '10:00 April', online: true },
        { id: 2, name: 'Kanha Gupta', message: 'Lorem ipsum dolor sit amet, consectetur adi...', time: '10:00 April', online: false },
        { id: 3, name: 'Dinesh Gupta', message: 'Lorem ipsum dolor sit amet, consectetur adi...', time: '10:00 April', online: false },
        { id: 4, name: 'Anshul', message: 'Lorem ipsum dolor sit amet, consectetur adi...', time: '10:00 April', online: false },
        { id: 5, name: 'Kristin Watson', message: 'Lorem ipsum dolor sit amet, consectetur adi...', time: '10:00 April', online: false },
    ]);

    const [activeChat, setActiveChat] = useState(chats[0]);
    const [messages, setMessages] = useState([
        { sender: 'Jane', text: 'Here, How are you today?', timestamp: '12:41', type: 'received' },
        { sender: 'You', text: 'I am good. What about you?', timestamp: '1:01', type: 'sent' },
        { sender: 'Jane', text: 'Have You done assignment?', timestamp: '12:41', type: 'received' },
        { sender: 'You', text: 'Done. all assignment', timestamp: '1:01', type: 'sent' },
    ]);

    const handleChatSelect = (chat) => {
        // Move selected chat to the top
        setChats([chat, ...chats.filter((c) => c.id !== chat.id)]);
        setActiveChat(chat);
    };

    const handleSendMessage = (text) => {
        setMessages([...messages, { sender: 'You', text, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), type: 'sent' }]);
    };

    return (
        <div className='lg:pl-64'>
          <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900 font-medium xs:text-sm lg:text-lg">Dashboard</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-emerald-500 xs:text-sm lg:text-lg">Messages</span>
                  </div>
                  <button className="bg-emerald-500 text-white px-2 lg:px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-600 transition-colors">
                    <Plus size={20} />
                    Add New
                  </button>
                </div>
        <div className="flex  xs:flex-col-reverse lg:flex-row h-screen gap-4 ">


            {/* Sidebar */}
            <div className="lg:w-1/4  border-r overflow-y-auto rounded-3xl border-2 border-green-300 ">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold">Chats</h2>


                    <button className="flex bg-green-500 text-white px-3 py-1 rounded-lg gap-2">
                        <h1>Add</h1>
                        <AiOutlineUserAdd className='mt-1' />
                    </button>

                </div>
                <div className='mt-2 flex items-center w-full max-w-md border-2  rounded-full px-4 py-1'>
                    <BsSearch className='text-2xl text-gray-500'/>
                    <input
                        type="text"
                        placeholder="Search anything"
                        className=" px-4 py-2   focus:outline-none rounded-full"

                    />
                    <BiCandles className='text-2xl text-gray-500 ml-5'/>
                </div>
                <div>
                    {chats.map((chat) => (
                        <div
                            key={chat.id}
                            className={`flex items-center mt-4 rounded-lg p-4 border-b cursor-pointer ${chat.id === activeChat.id ? 'bg-gray-200 font-bold' : ''}`}
                            onClick={() => handleChatSelect(chat)}
                        >
                            <img
                                src={`https://th.bing.com/th?id=OIP.oONuQTYo_qW0emm0dpXL9wHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2${chat.name.charAt(0)}`}
                                alt={chat.name}
                                className="rounded-full mr-3 w-10 h-10"
                            />
                            <div className="flex-1">
                                <h3 className=" text-sm">{chat.name}</h3>
                                <p className="text-xs text-gray-500 truncate">{chat.message}</p>
                            </div>
                            <span className="text-xs text-gray-400">{chat.time}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Window */}
            <div className="flex-1 flex flex-col rounded-3xl border-2 border-green-300 ">
                <div className="flex items-center p-4 border-b">
                    <img
                        src={`https://th.bing.com/th?id=OIP.oONuQTYo_qW0emm0dpXL9wHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2${activeChat.name.charAt(0)}`}
                        alt={activeChat.name}
                        className="rounded-full mr-3 object-cover w-12 h-12"
                    />
                    <h3 className="font-bold flex-1">{activeChat.name}</h3>
                    <div className="flex gap-3">
                        <button className="text-gray-600 text-2xl">
                            <FcVideoCall />
                        </button>
                        <button className="text-gray-600 text-2xl">
                            <IoCallOutline />
                        </button>
                        <button className="text-gray-600 text-2xl">
                            <BsThreeDots />
                        </button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.type === 'sent' ? 'justify-end' : ''} mb-4 text-sm`}
                        >
                            <div
                                className={`p-2 rounded-lg max-w-xs ${msg.type === 'sent' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-4 border-t flex items-center gap-4">
                    <input
                        type="text"
                        placeholder="Type something"
                        className="w-full px-4 py-2 focus:outline- border-2 rounded-full"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && e.target.value.trim()) {
                                handleSendMessage(e.target.value);
                                e.target.value = '';
                            }
                        }}
                    />
                    <GrGallery className='text-2xl text-green-600' />
                    <RiCameraAiLine className='text-2xl text-green-600' />
                    <FaMicrophoneAlt className='text-2xl text-green-600' />
                </div>
            </div>
        </div>
    </div>
    );
};

export default Messages;
