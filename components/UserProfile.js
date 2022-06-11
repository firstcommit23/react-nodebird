import react, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../reducers/user';

const UserProfile = () => {
    const dispatch = useDispatch();
    const { me, isLoaing } = useSelector((state) => state.user);
    const onLogOut = useCallback(() => {
        dispatch(logoutAction());
    }, []);
    return (
        <Card
            actions={[
                <div key="twit">
                    짹짹
                    <br />
                    {me.Posts.length}
                </div>,
                <div key="followings">
                    팔로잉
                    <br />
                    {me.Followings.length}
                </div>,
                <div key="followings">
                    팔로워
                    <br />
                    {me.Followings.length}
                </div>,
            ]}
        >
            <Card.Meta
                title={me.nickname}
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname}
            />
            <Button onClick={onLogOut} loading={isLoaing}>
                로그아웃
            </Button>
        </Card>
    );
};

export default UserProfile;
