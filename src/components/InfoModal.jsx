import React, {useState} from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const InfoModal = ({ isOpen, onClose }) => {
    const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("nick.joat@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (!isOpen) return null;
  return (
    <div className="info-modal-backdrop" onClick={onClose}>
      <div className="info-modal" onClick={(e) => e.stopPropagation()}>
        <div className="info-modal-header">
          <span className="info-modal-title">About this Project</span>
          <button className="info-modal-close" onClick={onClose}>x</button>
        </div>
        <div className="info-modal-body">
        <h3 className='body-title'>Greetings!</h3>
          <p className='info-modal-body-para'>Thank you for your interest in my movie API project. In this React project, I use multiple API's dynamically to fetch detailed movie info when you click on one of the search results. I explored skeleton loading states and experimented with different CSS styling options.</p>
          <div className='info-modal-contact'>
            <h4>For inquiries, contact me at:</h4>
            <a href="mailto:nick.joat@gmail.com" className='email-link'>nick.joat@gmail.com</a>
            </div>
          <button className="win95-modal-btn copy-btn" onClick={copyToClipboard}>
            <ContentCopyIcon sx={{ fontSize: 20 }} />
          </button>
          {isCopied && <span className="copied-notice">Copied!</span>}
        </div>
        <div className="info-modal-footer">
          <button className="info-modal-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default InfoModal