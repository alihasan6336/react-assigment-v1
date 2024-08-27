import React, { useState } from 'react';

const HelpCenter = () => {
    const [activeTab, setActiveTab] = useState('faq');

    return (
        <div className="help-center">
            <h1>Help Center</h1>
            <div className="tabs">
                <button onClick={() => setActiveTab('faq')} className={activeTab === 'faq' ? 'active' : ''}>FAQ</button>
                <button onClick={() => setActiveTab('contact')} className={activeTab === 'contact' ? 'active' : ''}>Contact Us</button>
            </div>
            <div className="content">
                {activeTab === 'faq' && (
                    <div className="faq">
                        <h2>Frequently Asked Questions</h2>
                        <p>Here are some common questions and answers.</p>
                    </div>
                )}
                {activeTab === 'contact' && (
                    <div className="contact-us">
                        <h2>Contact Us</h2>
                        <p>Feel free to reach out to us at contact@example.com.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HelpCenter;
