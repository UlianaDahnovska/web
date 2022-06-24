import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.image}
                     src='https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2147483647&v=beta&t=MpzHeo7wdMoePy-CjWNPwwMbgDU3ydtdqIXGYFtSisg'/>
            </div>
            <div className={classes.descriptionBlock}>
                avadesc
            </div>
        </div>
    )
}

export default ProfileInfo;