import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import styled, { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';

// 인라인 스타일을 사용하는 경우 리렌더링 되기 때문에 styled component, 또는 useMemo를 사용하여 렌더링 최적화.
//const style= useMemo(()=> ({marginTop:10}), []);
const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

// gutter 문제로 가로 스크롤 제거를 위해 추가.
const Global = createGlobalStyle`
.ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
}

.ant-col:first-child {
    padding-left: 0 !important;
}

.ant-col:last-child {
    padding-right: 0 !important;
}
`;

const AppLayout = ({ children }) => {
    //const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const { isLoggedIn } = useSelector((state) => state.user);
    const onSearch = () => {};
    return (
        <div>
            <Global />
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/">
                        <a>노드버드</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">
                        <a>프로필</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput
                        placeholder="input search text"
                        onSearch={onSearch}
                        enterButton
                    />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">
                        <a>회원가입</a>
                    </Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="" target="_blank" rel="noreferrer noopener">
                        Made By JiminKim
                    </a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
