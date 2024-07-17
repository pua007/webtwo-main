import React from 'react';
import styled from 'styled-components';

const HashTagBlock = styled.div`
    .hash {
        gap: 2px;
    }
    .hash_m {
        font-size: 10px;
    }
    .tag {
        gap: 5px;
        .tag_group {
            background-color: #ebebeb;
            color: #1e1e1e;
            display: inline-block;
            padding: 2px 8px 0;
            margin-top: 3px;
            margin-left: 3px;
            vertical-align: top;
            cursor: pointer;
            &:hover {
                background: lightyellow;
            }
        }
    }
`;

const HashTag = () => {
    return (
        <HashTagBlock>
            <div className="hash">
                <div className="hash_m">
                    아래 #해시태그를 선택하시면, 해당 해시태그와 관련된
                    질문&답변을 확인하실 수 있습니다.
                </div>
                <div className="tag">
                    <a className="tag_group">#지원서</a>
                    <a className="tag_group">#지원</a>
                    <a className="tag_group">#코딩테스트</a>
                    <a className="tag_group">#인터뷰</a>
                    <a className="tag_group">#전형결과</a>
                    <a className="tag_group">#공고</a>
                    <a className="tag_group">#추천인</a>
                    <a className="tag_group">#인재풀</a>
                </div>
            </div>
        </HashTagBlock>
    );
};

export default HashTag;
