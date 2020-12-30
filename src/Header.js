import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GroupIcon from '@material-ui/icons/Group';
import { Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CreateIcon from '@material-ui/icons/Create';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import EventIcon from '@material-ui/icons/Event';
import FlagIcon from '@material-ui/icons/Flag';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LocalMallIcon from '@material-ui/icons/LocalMall';

function Header() {
	const DropDownItem = ({ icon, title, p_tag }) => {
		return (
			<div className="dropDownItem">
				<div>{icon}</div>
				<div>
					<h4>{title}</h4>
					<p>{p_tag}</p>
				</div>
			</div>
		);
	};
	const AddDropDown = () => {
		return (
			<div className="dropDown">
				<h2>Tạo</h2>
				<DropDownItem
					icon={<CreateIcon />}
					title="Đăng"
					p_tag="Chia sẻ bài viết trên Bảng tin"
				/>
				<DropDownItem
					icon={<AmpStoriesIcon />}
					title="Tin"
					p_tag="Chia sẻ ảnh hoặc viết gì đó"
				/>
				<DropDownItem
					icon={<StarBorderIcon />}
					title="Sự kiện trong đời"
					p_tag="Thêm sự kiện trong đời vào trang cá nhân."
				/>
				<hr />
				<DropDownItem
					icon={<FlagIcon />}
					title="Trang"
					p_tag="Kết nối và chia sẻ với khách hàng hoặc fan."
				/>
				<DropDownItem
					icon={<ShoppingBasketIcon />}
					title="Quảng cáo"
					p_tag="Quảng cáo doanh nghiệp, thương hiệu hoặc tổ chức của bạn."
				/>
				<DropDownItem
					icon={<GroupIcon />}
					title="Nhóm"
					p_tag="Kết nối với những người cùng chung sở thích."
				/>
				<DropDownItem
					icon={<EventIcon />}
					title="Sự kiện"
					p_tag="Gắn kết mọi người thông qua sự kiện riêng tư hoặc công khai."
				/>
				<DropDownItem
					icon={<LocalMallIcon />}
					title="Bài niêm yết trên Marketplace"
					p_tag="Bán hàng cho người trong cộng đồng của bạn."
				/>
			</div>
		);
	};
	const [open, setOpen] = useState(false);

	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
					alt=""
				/>
				<div className="header__left__search">
					<SearchIcon />
					<input type="text" placeholder="Tìm kiếm trên Facebook" />
				</div>
			</div>
			<div className="header__mid">
				<div className="header__mid__icon active">
					<HomeIcon />
				</div>
				<div className="header__mid__icon">
					<PersonAddIcon />
				</div>
				<div className="header__mid__icon">
					<OndemandVideoIcon />
				</div>
				<div className="header__mid__icon">
					<StorefrontIcon />
				</div>
				<div className="header__mid__icon">
					<GroupIcon />
				</div>
			</div>
			<div className="header__right">
				<div className="header__right__info">
					<Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu8LpownQOhjizBY3UO-4YeNHsMTcan25TTsgcpX2Q=s32-c-mo" />
					<h4>Dũng</h4>
				</div>
				<div className="header__right__icon" onClick={() => setOpen(!open)}>
					<AddIcon />
					{open && <AddDropDown />}
				</div>
				<div className="header__right__icon">
					<ChatIcon />
				</div>
				<div className="header__right__icon">
					<NotificationsIcon />
				</div>
				<div className="header__right__icon">
					<ArrowDropDownIcon />
				</div>
			</div>
		</div>
	);
}

export default Header;
