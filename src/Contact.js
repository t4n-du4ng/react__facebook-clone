import React from 'react';
import './Contact.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
function Contact() {
	return (
		<div className="contact">
			<div className="contact__header">
				<h3>Người liên hệ</h3>
				<div className="contact__header__icons">
					<VideocamIcon />
					<SearchIcon />
					<MoreHorizIcon />
				</div>
			</div>
			<div className="contact__chatUsers">
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar src="" />
					<h4>Tan Dung</h4>
				</div>
			</div>
			<hr />
			<div className="contact__chatGroups">
				<h4>Cuộc trò chuyện nhóm</h4>
				<div className="contact__chatUser">
					<Avatar />
					<h4> 19CTT1</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar />
					<h4> 19CTT1</h4>
				</div>
				<div className="contact__chatUser">
					<Avatar />
					<h4> 19CTT1</h4>
				</div>
				<div className="contact__addChat">
					<div className="header__right__icon">
						<AddIcon />
					</div>
					<h4>Tạo nhóm mới</h4>
				</div>
			</div>
		</div>
	);
}

export default Contact;
