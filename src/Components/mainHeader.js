import React, { Component } from 'react';
import styled from 'styled-components';

class mainHeader extends Component {

    render() {
        return (
            <section>
                <div className="Header__top">
                    <div className="logoBox">
                        {/* 로고 이미지 들어갈 곳 */}
                        로고이미지
                    </div>
                    <div className="navBox">
                        <nav className="mainNav">

                        </nav>
                    </div>
                </div>
                <div className="Header__bottom">

                </div>
            </section>

        );
    }
}




export default mainHeader;