import React, { useState, useEffect } from 'react';
import './style.css';

const Content = () => {
    const [i, setI] = useState(0);
    const time = 5000;
    const cec_img = 'cec_logo.png';
    const data = [
        ["Jyothirmayi Devi C", 'DSC_0426 4.png','Assistant Professor - Computer  Science Department','M Tech. in Computer Science & Engineering (2002-2004)','B Tech in Computer Science & Engineering (1986-1991)','jyothirmayi@ceconline.edu','304','Life time Member of “The Indian Society for Technical Education (ISTE)” an organization for promoting the quality and standards in Technical Education.','Coordinator of SUMMIT-2016, National tech fest conducted at College of Enginering , Chengannur.','Staff -in-charge of FOCES','1'],
        ["Princy Sugathan", 'DSC_0434 1.png','Assistant Professor - Computer  Science Department','M Tech. In Software Engineering (2010-2012)','B Tech in Computer Engineering (1998-2002)','-','304','Life time Member of “The Indian Society for Technical Education (ISTE)” an organization for promoting the quality and standards in Technical Education.','Additional Supt. Of Examination Cell for both Cochin University of Science and Technology and A P J Abdul Kalam Technological University.','Assistant Warden for Ladies Hostel of College of Engineering Chengannur.','1'],
        ['Betty James', 'DSC_0314 (1) 1.png','Assistant Professor - Computer  Science Department','M.Tech. in Digital Image Processing','BTech in Computer Science and Engineering.','bettycec@ceconline.edu','304',' ',' ',' ','0'],
        ['Shemeema Hashim', 'photo-Shemeema-Hasihim 1.png','Assistant Professor - Computer  Science Department','B.Tech in Computer Science and Engineering','M. Tech in Computer and Information Science','shemeemahashim786@gmail.com','304',' ',' ',' ','0']
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setI(prevI => {
                if (prevI >= data.length - 1) {
                    clearInterval(interval);
                    window.location.href = "index2.html";
                    return prevI;
                } else {
                    return prevI + 1;
                }
            });
        }, time);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="bar"></div>
            <div className="header">
                <div className="text">
                    <h1 id="changingName" name="person">{data[i][0]}</h1>
                    <h5 className="position">{data[i][2]}</h5>
                </div>
            </div>
            <img className="cec" src={cec_img} alt="" />
            <div className="main">
                <div className="main_left">
                    <img name="slide" className="image" src={data[i][1]} alt="" />
                </div>
                <div className="main_right">
                    <div className="acca">
                        <h4>ACADEMIC QUALIFICATIONS</h4>
                        <ul className="point">
                            <li id="acade1">{data[i][3]}</li>
                            <li id="acade2">{data[i][4]}</li>
                        </ul>
                    </div>
                    <div className="cont">
                        <span className="spa"><p className="mail">E-mail ID : </p><p id="mail_1">{data[i][5]}</p></span>
                        <span className="spa"><p className="mail">Room No : </p><p id="mail_2">{data[i][6]}</p></span>
                    </div>
                    <div className="poss">
                        <p className="posi">Positions Handled</p>
                    </div>
                    <div id="myDiv" style={{display: data[i][10] === '0' ? 'none' : 'block'}}>
                        <ul className="posi_1">
                            <li id="posi-1">{data[i][7]}</li>
                            <li id="posi-2">{data[i][8]}</li>
                            <li id="posi-3">{data[i][9]}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pro">
                <h3>BY PRODDEC CEC</h3>
            </div>
            <div className="bar_down"></div>
        </div>
    );
};

export default Content;