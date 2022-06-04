import react, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';

const UserProfile = ({ setIsLoggedIn }) => {
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
    }, []);
    return (
        <Card
            actions={[
                <div key="twit">
                    짹짹
                    <br />
                </div>,
                <div key="followings">
                    팔로잉
                    <br />
                </div>,
                <div key="followings">
                    팔로워
                    <br />
                </div>,
            ]}
        >
            <Card.Meta
                title="Jimin"
                avatar={<Avatar>JM</Avatar>}
                title="Jimin Kim"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;
