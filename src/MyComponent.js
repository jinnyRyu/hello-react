import PropTypes from 'prop-types';


const MyComponent = ({ name, children, favoriteNum }) => {


    return <div>
        안녕하세요 , 제 이름은 {name} 입니다.
        children 값은 {children} 입니다.
        제가 좋아하는 숫자는 {favoriteNum}
    </div>
};

MyComponent.defaultProps = {
    name: '기본이름'
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNum: PropTypes.number.isRequired
}

export default MyComponent;