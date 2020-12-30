import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import GroupIcon from '@material-ui/icons/Group';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__info">
				<Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu8LpownQOhjizBY3UO-4YeNHsMTcan25TTsgcpX2Q=s32-c-mo" />
				<h4>Nguyễn Tấn Dũng</h4>
			</div>
			<div className="sidebar__services">
				<div className="sidebar__service">
					<PersonIcon />
					<h4>Bạn bè</h4>
				</div>
				<div className="sidebar__service">
					<ChatIcon />
					<h4>Messenger</h4>
				</div>
				<div className="sidebar__service">
					<GroupIcon />
					<h4>Nhóm</h4>
				</div>
				<div className="sidebar__service">
					<StorefrontIcon />
					<h4>Marketplace</h4>
				</div>
				<div className="sidebar__service">
					<ExpandMoreIcon />
					<h4>Xem thêm</h4>
				</div>
			</div>
			<hr />
			<div className="sidebar__shortcuts">
				<div className="sidebar__shortcuts__info">
					<h4>Lối tắt của bạn</h4>
					<p>Chỉnh sửa</p>
				</div>
				<div className="sidebar__service">
					<GroupIcon />
					<h4>GDQPAN - C27</h4>
				</div>
				<div className="sidebar__service">
					<GroupIcon />
					<h4>Tài liệu ĐH KHTN - HCMUS</h4>
				</div>
				<div className="sidebar__service">
					<GroupIcon />
					<h4>ĐH KHTN-K19</h4>
				</div>
				<div className="sidebar__service">
					<GroupIcon />
					<h4>Khoa CNTT - Lớp 19CTT1</h4>
				</div>
			</div>
			<div className="sidebar__footer">
				<p>
					<a href="#">Quyền riêng tư</a>-<a href="#">Điều khoản</a>-
					<a href="#">Quảng cáo</a>-<a href="#">Lựa chọn quảng cáo</a>-
					<a href="#">Cookie</a>-<a href="#">Xem thêm</a>-Facebook © 2020
				</p>
			</div>
		</div>
	);
}

export default Sidebar;
