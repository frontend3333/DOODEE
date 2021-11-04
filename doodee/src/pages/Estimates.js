
import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import './Estimates.css'

const Estimates = () => {
    const [state, handleSubmit] = useForm("moqyzbpg");
    const [disable, setDisable] = React.useState(false);
    
    const ipt_box = document.getElementsByTagName("input");
    const data = ['','','','',''];
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    function changeMarginColor(item){
        return item.target.style.borderBottomColor = "red";
    };

    const iptCheck = (e) =>{
        if (e.target.value === ""){
            changeMarginColor(e);
            console.log(ipt_box);
            console.log(ipt_box[0].value);
            console.log("input some value plz!");
        }
    };
    
    const summitCheck = () =>{
        if ((ipt_box[0].value === data[0] ||
            ipt_box[1].value === data[1] ||
            ipt_box[2].value === data[2] ||
            ipt_box[3].value === data[3] ||
            ipt_box[4].value === data[4])&&
            (ipt_box[5].checked === false &&
            ipt_box[6].checked === false && 
            ipt_box[7].checked === false && 
            ipt_box[8].checked === false && 
            ipt_box[9].checked === false)&&
            (ipt_box[10].checked === false &&
            ipt_box[11].checked === false &&
            ipt_box[12].checked === false &&
            ipt_box[13].checked === false &&
            ipt_box[14].checked === false &&
            ipt_box[15].checked === false &&
            ipt_box[16].checked === false)&&(ipt_box[18].checked === false)){
            console.log("nothing");
            
            console.log(ipt_box[18].checked);
            alert('값을 입력해 주세요!');
        }
        else{
            setDisable(false);                
            console.log("changeState");
            alert('전송 완료!');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">ryeongee21@naver.com</label>
                <div className="Estimates-container">
                    <div className="first-container-item">
                        <h1>estimates</h1>
                    </div>
                    <div className="second-container-item">
                        <div className="Explanation-container">
                            <span>
                                공간을 맞추는 인테리어 디자인
                                <span> 두디</span>
                                의
                            </span><br/>
                            <span>
                                온라인을 통한 견적문의상담 양식입니다.
                            </span><br/>
                            <span>
                                빠른 상담문의 원하시면 
                                <span> 010-9015-0814 </span>
                                전화주세요
                            </span>    
                        </div>
                    </div>
                    <div className="third-container-item">
                        <div className="estimation-title">
                            <h1>견적 요청</h1>
                        </div>
                        <div className="estimation-grid-container">
                            <div className="grid-item">
                                <label className="ipt_top">
                                    <input type="text" placeholder="이름" onChange={iptCheck}/>
                                </label>
                            </div>
                            <div className="grid-item">
                                <label className="ipt_top">
                                    <input placeholder="연락처" onChange={iptCheck}/>                            
                                </label>
                            </div>
                            <div className="grid-item">
                                <label className="ipt_top">
                                    <input id="email" type="email" name="email" placeholder="이메일" onChange={iptCheck}/>                            
                                </label>
                            </div>                                     
                            <div className="grid-item">
                                <label className="ipt_top">
                                    <input placeholder="지역 (예: 안산 단원구 초지동 큐브빌라)" onChange={iptCheck}/>                            
                                </label>
                            </div>   
                            <div className="grid-item">
                                <label className="ipt_top">
                                    <div className="select-container">
                                        <select>
                                            <option value="default" hidden>인테리어 공간</option>
                                            <option value="주거">주거</option>
                                            <option value="상업">상업</option>    
                                            <option value="기타">기타</option>    
                                        </select>                                
                                    </div>      
                                </label>
                            </div>
                            <div className="grid-item">
                                <label className="ipt_top">
                                    <input placeholder="예정일 (예: 5월 중순 입주예정 or 10월 공사예정)" onChange={iptCheck}/>                            
                                </label>
                            </div>
                            <div className="grid-item">
                                <h2>건물 연식</h2>
                                <div className="checkbox-container">
                                    <label className="ipt_on">
                                        <input type="checkbox" defaultChecked/>
                                        <p>신축</p>
                                    </label>
                                </div>
                                <div className="checkbox-container">
                                    <label className="ipt_off">
                                        <input type="checkbox" defaultChecked/>
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
                                        <input type="checkbox" defaultChecked/>
                                        <p>10평형대~</p>
                                    </label>
                                </div>
                                <div className="checkbox-container">
                                    <label className="ipt_on">
                                        <input type="checkbox" defaultChecked/>
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
                                <div className="checkbox-container">
                                    <label className="ipt_off">
                                        <input type="checkbox"/>
                                        <p>이용약관에 동의합니다.</p>
                                    </label>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="button-container">
                                    <button className="submit" disabled={disable} onClick={summitCheck} type="submit" >견적 요청</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>               
            </form>

        </>
    );  
};

export default Estimates;

