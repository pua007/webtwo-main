import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import HashTag from './HashTag';
import Title from './Title';
import qandaJson from '../../assets/data/qandatext.json';
import Pagenation from './Pagenation';

const QuestionBlock = styled.div`
    height: 1000px;
    position: relative;

    .wrap {
        margin: auto;
        padding: 120px 0 158px;
        width: 80%;
        .list_ul {
            border-top: 1px solid #888;
            li {
                display: list-item;
                border-bottom: 1px solid #888;
                unicode-bidi: isolate;
                text-align: left;
                padding: 36px 35px 31px 25px;
                cursor: pointer;

                .list_strong {
                    color: #1e1e1e;
                    display: block;
                    font-size: 20px;
                    overflow: hidden;
                }
                p {
                    &.active {
                        display: block;
                    }
                    display: none;
                    margin-block-start: 1em;
                    margin-block-end: 1em;
                    margin-inline-start: 0px;
                    margin-inline-end: 0px;
                    unicode-bidi: isolate;
                }
            }
        }
    }
`;

const QuestionSection = () => {
    const [active, setActive] = useState();
    const question = qandaJson;

    const totalItems = useRef(0);
    totalItems.current = question.length;
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = question.slice(indexOfFirstItem, indexOfLastItem);

    const eventHandle = (index) => {
        if (active == index) {
            setActive(null);
        } else {
            setActive(index);
        }
    };

    return (
        <QuestionBlock>
            <div className="wrap">
                <Title title={'자주 묻는 질문'} />
                <HashTag />
                <br />
                {currentItems.map((item, index) => (
                    <ul className="list_ul">
                        <li onClick={() => eventHandle(index)}>
                            <strong className="list_strong">
                                <span className="q">Q.</span>
                                <span className="txt">{item.title}</span>
                            </strong>
                            <p className={active == index ? 'active' : ''}>
                                {item.text}
                            </p>
                        </li>
                    </ul>
                ))}
                <Pagenation
                    totalItems={totalItems.current}
                    setCurrentPage={setCurrentPage}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    setActive={setActive}
                />
            </div>
        </QuestionBlock>
    );
};

export default QuestionSection;
