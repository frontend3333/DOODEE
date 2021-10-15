import React from 'react';
import './Estimates.css'

const Estimates = () => {
    return (
        <>
            <div className="Estimates-container">
                <div className="first-container-item">
                    <h1>estimates</h1>
                </div>
                <div className="second-container-item">
                    <div className="Explanation-container">
                        <h2>공간을 맞추는 인테리어 디자인 두디의</h2>
                        <h2>온라인을 통한 견적문의상담 양식입니다.</h2>
                        <h2>빠른 상담문의 원하시면 010-9015-0814 전화주세요</h2>
                    </div>
                </div>
                <div className="third-container-item">
                    <div className="estimation-title">
                        <h1>견적요청</h1>
                    </div>
                    <div className="estimation-grid-container">
                        <div className="grid-item">
                            <label className="ipt_top">
                                <input placeholder="이름"/>
                            </label>
                        </div>
                        <div className="grid-item">
                            <label className="ipt_top">
                                <input placeholder="연락처"/>                            
                            </label>
                        </div>
                        <div className="grid-item">
                            <label className="ipt_top">
                                <input placeholder="이메일"/>                            
                            </label>
                        </div>                                     
                        <div className="grid-item">
                            <label className="ipt_top">
                                <input placeholder="지역 (예: 안산 단원구 초지동 큐브빌라)"/>                            
                            </label>
                        </div>   
                        <div className="grid-item">
                            <label className="ipt_top">
                                <input placeholder="인테리어 공간"/>                            
                            </label>
                        </div>
                        <div className="grid-item">
                            <label className="ipt_top">
                                <input placeholder="예정일 (예: 5월 중순 입주예정 or 10월 공사예정)"/>                            
                            </label>
                        </div>
                        <div className="grid-item">
                            <h2>건물 연식</h2>
                            <div className="checkbox-container">
                                <label className="ipt_on">
                                    <input type="checkbox"/>
                                    <p>신축</p>
                                </label>
                            </div>
                            <div className="checkbox-container">
                                <label className="ipt_off">
                                    <input type="checkbox"/>
                                    <p>~10년 미만</p> 
                                </label>
                            </div>                            
                            <div className="checkbox-container">
                                <label className="ipt_off">
                                    <input type="checkbox"/>
                                    <p>~20년 미만</p>
                                </label>
                            </div>                            
                            <div className="checkbox-container">
                                <label className="ipt_off">
                                    <input type="checkbox"/>
                                    <p>20년 이상~</p>
                                </label>
                            </div>                            
                            <div className="checkbox-container">
                                <label className="ipt_on">
                                    <input type="checkbox"/>
                                    <p>기타</p>
                                </label>
                            </div>
                        </div>
                        <div className="grid-item">
                            <h2>평형대</h2>
                            <div className="checkbox-container">
                                <label className="ipt_on">
                                    <input type="checkbox"/>
                                    <p>10평형대~</p>
                                </label>
                            </div>
                            <div className="checkbox-container">
                                <label className="ipt_on">
                                    <input type="checkbox"/>
                                    <p>20평형대~</p>
                                </label>
                            </div>                            
                            <div className="checkbox-container">
                                <label className="ipt_off">
                                    <input type="checkbox"/>
                                    <p>30평형대~</p>
                                </label>
                            </div>                            
                            <div className="checkbox-container">
                                <label className="ipt_off">
                                    <input type="checkbox"/>
                                    <p>40평형대~</p>
                                </label>
                            </div>                            
                            <div className="checkbox-container">
                                <label className="ipt_off">
                                    <input type="checkbox"/>
                                    <p>50평형대~</p>
                                </label>
                            </div>                            
                            <div className="checkbox-container">
                                <label className="ipt_off">
                                    <input type="checkbox"/>
                                    <p>60평형대~</p>
                                </label>
                            </div>                            
                            <div className="checkbox-container">
                                <label className="ipt_off">
                                    <input type="checkbox"/>
                                    <p>기타</p>
                                </label>
                            </div>
                        </div>
                        <div className="grid-item">
                            <label className="ipt_bot">
                                <input placeholder="인테리어 공사 예산 및 문의 내역"/>
                            </label>
                        </div>
                        <div className="grid-item">
                            <label className="ipt_off">
                                <input type="checkbox"/>
                                <p>이용약관에 동의합니다.</p>
                            </label>
                        </div>
                        <div className="grid-item">
                            <button>견적 요청</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );  
};

export default Estimates;

