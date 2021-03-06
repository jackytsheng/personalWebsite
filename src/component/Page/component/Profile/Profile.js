import React from 'react';
import styles from './Profile.module.scss';
import TraceSvg from './img/Svg';

const Profile = (props) => {
  return (
    <div className={styles.wrapper}>
      <figure className={styles.container}>
        <img
          onLoad={props.handleImageLoaded}
          className={styles.picture}
          src="https://github.com/jackytsheng/personal-website-react/blob/master/Profile_Picture/profile.PNG?raw=true"
          alt="this is my profile"
        ></img>
      </figure>
      <div className={styles.name}>
        <h2>JIAJIN ZHENG</h2>
      </div>
      <div className={styles.description}>
        <TraceSvg />
      </div>
    </div>
  );
}



export default Profile;