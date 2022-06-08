import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
// 정규표현식 테스트 : https://regexr.com/
const PostCardContent = ({ postData }) => {
    return (
        <div>
            {postData.split(/(#[^\s#]+)/g).map((v, index) => {
                if (v.match(/(#[^\s#]+)/)) {
                    return (
                        <Link href={`/hashtag/${v.slice(1)}`} key={index}>
                            <a>{v}</a>
                        </Link>
                    );
                }
                return v;
            })}
        </div>
    );
};

PostCardContent.propTypes = { postData: PropTypes.string.isRequired };

export default PostCardContent;
