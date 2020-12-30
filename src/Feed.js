import React from 'react';
import './Feed.css';
import AddIcon from '@material-ui/icons/Add';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ChatIcon from '@material-ui/icons/Chat';

function Feed() {
	return (
		<div className="feed">
			<div className="feed__stuff feed__story">
				<div className="feed__createStory">
					<div className="feed__story__icon">
						<AddIcon />
					</div>
					<div className="feed_storyInfo">
						<h3>Tạo tin</h3>
						<p>Chia sẻ ảnh hoặc viết gỉ đó</p>
					</div>
				</div>
			</div>
			<div className="feed__stuff feed__update">
				<div className="feed__updateInfo">
					<Avatar />
					<input type="text" placeholder="Dũng ơi, bạn đang nghĩ gì thế?" />
				</div>
				<div className="feed__updateOptions">
					<div className="feed__updateOption">
						<VideocamIcon />
						<h5>Video trực tiếp</h5>
					</div>
					<div className="feed__updateOption">
						<PhotoLibraryIcon />
						<h5>Ảnh/Video</h5>
					</div>
					<div className="feed__updateOption">
						<TagFacesIcon />
						<h5>Cảm xúc/Hoạt động</h5>
					</div>
				</div>
			</div>
			{/* <div className="feed__stuff feed__zoom">
				<div className="feed__zoomInfo">
					<VideocamIcon />
					<h6>Phòng họp mặt</h6>-<p>Chat video với bạn bè </p>
					<a href="#">Tạo phòng họp mặt</a>
				</div>
				<div className="feed__createZoom">
					<div className="feed__createZoom__avt">
						<Avatar />
						<Avatar />
						<Avatar />
						<Avatar />
						<Avatar />
						<Avatar />
						<Avatar />
						<Avatar />
						<Avatar />
						<Avatar />
						<Avatar />
					</div>
				</div>
			</div> */}
			<div className="feed__stuff feed__news">
				<div className="feed__news__header">
					<Avatar />
					<div className="feed__news__header__info">
						<h4>Nguyễn Tấn Dũng</h4>
						<p>10 phút</p>
					</div>
					<MoreHorizIcon className="moreIcon" />
				</div>
				<div className="feed__news__content">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
						in dolorum placeat vitae similique omnis esse explicabo. Temporibus
						quasi rem laborum eaque commodi sequi, ipsam consequatur neque eum
						in impedit aut, numquam culpa provident autem officia soluta dolorum
						fuga. Qui!
					</p>
				</div>
				<img
					src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/121983415_1470454546482632_8421287387811170804_o.jpg?_nc_cat=1&ccb=2&_nc_sid=730e14&_nc_ohc=J79l_hoxLPsAX-2f_CW&_nc_ht=scontent.fvca1-2.fna&oh=59f4e5b3669aaa231935d4f8736d542c&oe=5FB79807"
					alt=""
				/>
				<div className="feed__news__footer">
					<div className="feed__news__footer__info">
						<ThumbUpAltIcon />
						<FavoriteIcon />
						<p className="margin-left">Hải Ngọc và 33K người khác</p>
						<p className="right">1K bình luận, 2,5K lượt chia sẻ</p>
					</div>
					<div className="feed__news__footer__react">
						<div className="reactIcon">
							<ThumbUpAltIcon />
							<h4>Thích</h4>
						</div>
						<div className="reactIcon">
							<ChatIcon />
							<h4>Bình luận</h4>
						</div>
						<div className="reactIcon">
							<ShareIcon />
							<h4>Chia sẻ</h4>
						</div>
					</div>
				</div>
			</div>
			<div className="feed__stuff feed__news">
				<div className="feed__news__header">
					<Avatar />
					<div className="feed__news__header__info">
						<h4>Nguyễn Tấn Dũng</h4>
						<p>10 phút</p>
					</div>
					<MoreHorizIcon className="moreIcon" />
				</div>
				<div className="feed__news__content">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
						in dolorum placeat vitae similique omnis esse explicabo. Temporibus
						quasi rem laborum eaque commodi sequi, ipsam consequatur neque eum
						in impedit aut, numquam culpa provident autem officia soluta dolorum
						fuga. Qui!
					</p>
				</div>
				<img
					src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/121983415_1470454546482632_8421287387811170804_o.jpg?_nc_cat=1&ccb=2&_nc_sid=730e14&_nc_ohc=J79l_hoxLPsAX-2f_CW&_nc_ht=scontent.fvca1-2.fna&oh=59f4e5b3669aaa231935d4f8736d542c&oe=5FB79807"
					alt=""
				/>
				<div className="feed__news__footer">
					<div className="feed__news__footer__info">
						<ThumbUpAltIcon />
						<FavoriteIcon />
						<p className="margin-left">Hải Ngọc và 33K người khác</p>
						<p className="right">1K bình luận, 2,5K lượt chia sẻ</p>
					</div>
					<div className="feed__news__footer__react">
						<div className="reactIcon">
							<ThumbUpAltIcon />
							<h4>Thích</h4>
						</div>
						<div className="reactIcon">
							<ChatIcon />
							<h4>Bình luận</h4>
						</div>
						<div className="reactIcon">
							<ShareIcon />
							<h4>Chia sẻ</h4>
						</div>
					</div>
				</div>
			</div>
			<div className="feed__stuff feed__news">
				<div className="feed__news__header">
					<Avatar />
					<div className="feed__news__header__info">
						<h4>Nguyễn Tấn Dũng</h4>
						<p>10 phút</p>
					</div>
					<MoreHorizIcon className="moreIcon" />
				</div>
				<div className="feed__news__content">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
						in dolorum placeat vitae similique omnis esse explicabo. Temporibus
						quasi rem laborum eaque commodi sequi, ipsam consequatur neque eum
						in impedit aut, numquam culpa provident autem officia soluta dolorum
						fuga. Qui!
					</p>
				</div>
				<img
					src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/121983415_1470454546482632_8421287387811170804_o.jpg?_nc_cat=1&ccb=2&_nc_sid=730e14&_nc_ohc=J79l_hoxLPsAX-2f_CW&_nc_ht=scontent.fvca1-2.fna&oh=59f4e5b3669aaa231935d4f8736d542c&oe=5FB79807"
					alt=""
				/>
				<div className="feed__news__footer">
					<div className="feed__news__footer__info">
						<ThumbUpAltIcon />
						<FavoriteIcon />
						<p className="margin-left">Hải Ngọc và 33K người khác</p>
						<p className="right">1K bình luận, 2,5K lượt chia sẻ</p>
					</div>
					<div className="feed__news__footer__react">
						<div className="reactIcon">
							<ThumbUpAltIcon />
							<h4>Thích</h4>
						</div>
						<div className="reactIcon">
							<ChatIcon />
							<h4>Bình luận</h4>
						</div>
						<div className="reactIcon">
							<ShareIcon />
							<h4>Chia sẻ</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Feed;
