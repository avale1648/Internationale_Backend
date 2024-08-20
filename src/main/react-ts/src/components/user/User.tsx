import UserProps from '../../props/UserProps';
import './styles.css';
import DEFAULT_BANNER from '../../assets/default_banner.png';
import DEFAULT_PFP from '../../assets/default-user-pfp.png';
import RATING from '../../assets/rating.svg';
import REGISTRATION from '../../assets/registration.svg';

export function User({ userProps: props }: { userProps: UserProps }) {
    const banner = props.banner === "" ? DEFAULT_BANNER : props.banner;
    const pfp = props.pfp === "" ? DEFAULT_PFP : props.pfp;
    const date = new Date(props.cakedate);
    const cakedate_format = `${date.toLocaleDateString("ru-RU")}`;

    return (
        <div className='user'>
            <img className="user-banner" src={banner} alt='banner' />
            <div className='user-header'>
                <img src={pfp} alt='pfp' />
                <h2>{'с/' + props.name}</h2>
            </div>
            <div className='user-info'>
                <div className='user-info-sub' data-title='Рейтинг'>
                    <img src={RATING} alt='rating' />
                    {props.rating}
                </div>
                <div className='user-info-sub' data-title='Дата регистрации'>
                    <img src={REGISTRATION} alt='cakedate'></img>
                    {cakedate_format}
                </div>
                <div className='user-description'>{props.description}</div>
            </div>
        </div>
    );
}

export function UserPreview({ userProps }: { userProps: UserProps }) {
    const pfp = userProps.pfp === "" ? DEFAULT_PFP : userProps.pfp;

    return (
        <div className='user'>
            <div className='user-info-sub'>
                <img src={pfp} alt='pfp'/>
                {userProps.name}
            </div>
            <div className='user-info-sub'>
                <img src={RATING} alt='rating' />
                {userProps.rating}
            </div>
        </div>
    );
}

