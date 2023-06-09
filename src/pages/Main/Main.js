import React from 'react';
import './Main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faGear,
  faEllipsis,
  faArrowUpFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faComment,
  faHeart,
  faUser,
} from '@fortawesome/free-regular-svg-icons';

function Main() {
  return (
    <>
      <header>
        <nav id="nav-bar">
          <div className="logo">
            <img src="/images/instagram.png" alt="logo" />
            <a href="/">WESTAGRAM</a>
          </div>
          <div className="searchBar">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="faMagnifyingGlass"
            />
            <input type="text" placeholder="검색" />
            <div className="searchBarMenu">
              <div className="resultBoxTriangle none"></div>
              <ul className="resultBox"></ul>
            </div>
          </div>
          <div className="nav-right">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="explore"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="heart"
            />
            <img
              className="navProfileImg"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="profile"
            />
          </div>
        </nav>
        <div className="navProfile">
          <div className="navProfileTriangle disabled"></div>
          <ul className="navProfileMenuBar disabled">
            <li className="navProfileMenu">
              <FontAwesomeIcon icon={faUser} className="faUser" />
              <span>프로필</span>
            </li>
            <li className="navProfileMenu">
              <FontAwesomeIcon icon={faBookmark} className="faBookmark" />
              <span>저장됨</span>
            </li>
            <li className="navProfileMenu">
              <FontAwesomeIcon icon={faGear} className="fa-gear" />
              <span>설정</span>
            </li>
            <li className="navProfileMenu">로그아웃</li>
          </ul>
        </div>
      </header>

      <main>
        <section className="feeds">
          <div className="top">
            <div className="topLogo">
              <img
                src="https://images.unsplash.com/photo-1507166763745-bfe008fbb831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
              <span>jy_baek</span>
            </div>
            <div className="topIcon">
              <FontAwesomeIcon icon={faEllipsis} className="faEllipsis" />
            </div>
          </div>

          <div className="image">
            <img src="/images/feed.jpg" alt="" />
          </div>

          <div className="feed-icons">
            <div className="feed-icons-left">
              <FontAwesomeIcon icon={faHeart} className="faHeart" />
              <FontAwesomeIcon icon={faComment} className="faComment" />
              <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                className="faArrowUpFromBracket"
              />
            </div>
            <div className="feed-icons-right">
              <FontAwesomeIcon icon={faBookmark} className="faBookmark" />
            </div>
          </div>

          <div className="likes">
            <img
              src="https://images.unsplash.com/photo-1587161584760-f51779fb276a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <span>
              <span className="likesInfo">aineworld</span>님 외
              <span className="likesInfo">10명</span>이 좋아합니다.
            </span>
          </div>

          <div className="contents">
            <span>jy_baek</span>
            <span>위워크에서 진행된 베이킹 클래스...</span>
            <span>더 보기</span>
            <div>42분 전</div>
          </div>

          <ul className="commentList">
            <li className="commentList-first">
              <span className="comment-account">neceosecius</span>
              <span>거봐 좋았잖아~</span>
              <button>삭제</button>
              <FontAwesomeIcon icon={faHeart} className="faHeart" />
            </li>
          </ul>

          <div className="comment">
            <input placeholder="댓글 달기" />
            <button>게시</button>
          </div>
        </section>

        <section className="main-right">
          <div className="account">
            <img
              src="https://images.unsplash.com/photo-1507166763745-bfe008fbb831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <div className="account-info">
              <p>jy_baek</p>
              <p>wecode | 백지율</p>
            </div>
          </div>

          <div className="story">
            <div className="story-header">
              <p>스토리</p>
              <span>모두 보기</span>
            </div>
            <ul className="story-list">
              <li>
                <img
                  src="https://images.unsplash.com/photo-1587161584760-f51779fb276a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
                <div className="account-detail">
                  <p>studyholmes</p>
                  <p>16분 전</p>
                </div>
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
                <div className="account-detail">
                  <p>writeanddraw</p>
                  <p>3시간 전</p>
                </div>
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1532911557891-d12f6b98dddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=477&q=80"
                  alt=""
                />
                <div className="account-detail">
                  <p>shadezahrai</p>
                  <p>20시간 전</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="recommend">
            <div className="recommend-header">
              <p>회원님을 위한 추천</p>
              <span>모두 보기</span>
            </div>
            <ul className="recommend-list">
              <li>
                <img
                  src="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
                  alt=""
                />
                <div className="recommend-account">
                  <p>daebaki.wow</p>
                  <p>catpuppy님 외 12명이...</p>
                </div>
                <button>팔로우</button>
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80"
                  alt=""
                />
                <div className="recommend-account">
                  <p>kyeonghunbae</p>
                  <p>agnesBaek님 외 21명이...</p>
                </div>
                <button>팔로우</button>
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1578925518470-4def7a0f08bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                  alt=""
                />
                <div className="recommend-account">
                  <p>nomad.planner</p>
                  <p>nomadcoder님 외 7명이...</p>
                </div>
                <button>팔로우</button>
              </li>
            </ul>
          </div>

          <div className="footer">
            <p>
              Instagram 정보 · 지원 · 홍보센터 · API · 채용정보 ·
              개인정보처리방침 · 약관 · 디렉터리 · 프로필 · 해시태그 · 언어
            </p>
            <p>ⓒ 2019 INSTAGRAM</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
