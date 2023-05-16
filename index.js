const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');
const days = document.querySelector('.days');

seconds.innerHTML = `<div class="flip-box kenan-bg">
                        <div class="seconds-tens-box">
                            <div class="front">
                                <img src="img/kenan-top.png" alt="Question mark" class="q-mark">
                            </div>
                            <div class="back">
                                <img src="img/kenan-bottom.png" alt="Question mark" class="q-mark">
                            </div>
                        </div>
                    </div>
                    <div class="flip-box question-bg">
                        <div class="seconds-ones-box">
                            <div class="front">
                                <img src="img/question-top.png" alt="Question mark" class="q-mark">
                            </div>
                            <div class="back">
                                <img src="img/question-bottom.png" alt="Question mark" class="q-mark">
                            </div>
                        </div>
                    </div>`;

minutes.innerHTML = `<div class="flip-box threeve-bg">
                        <div class="minutes-tens-box">
                            <div class="front">
                                <img src="img/threeve-top.png" alt="Question mark" class="q-mark">
                            </div>
                            <div class="back">
                                <img src="img/threeve-bottom.png" alt="Question mark" class="q-mark">
                            </div>
                        </div>
                    </div>
                    <div class="flip-box andy-bg">
                        <div class="minutes-ones-box">
                            <div class="front">
                                <img src="img/andy-top.png" alt="Question mark" class="q-mark">
                            </div>
                            <div class="back">
                                <img src="img/andy-bottom.png" alt="Question mark" class="q-mark">
                            </div>
                        </div>
                    </div>
                    <div class="colon">
                        <span>:</span>
                    </div>`;

hours.innerHTML = `<div class="flip-box farley-bg">
                        <div class="hours-tens-box">
                            <div class="front">
                                <img src="img/farley-top.png" alt="Question mark" class="q-mark">
                            </div>
                            <div class="back">
                                <img src="img/farley-bottom.png" alt="Question mark" class="q-mark">
                            </div>
                        </div>
                    </div>
                    <div class="flip-box girl-bg">
                        <div class="hours-ones-box">
                            <div class="front">
                                <img src="img/confused-girl-top.png" alt="Question mark" class="q-mark">
                            </div>
                            <div class="back">
                                <img src="img/confused-girl-bottom.png" alt="Question mark" class="q-mark">
                            </div>
                        </div>
                    </div>
                    <div class="colon">
                        <span>:</span>
                    </div>`;

days.innerHTML = `<div class="flip-box scratch-bg">
                        <div class="days-tens-box">
                            <div class="front">
                                <img src="img/scratch-top.png" alt="scratch mark" class="q-mark">
                            </div>
                            <div class="back">
                                 <img src="img/scratch-bottom.png" alt="scratch mark" class="q-mark">
                            </div>
                        </div>
                    </div>
                    <div class="flip-box blind-bg">
                        <div class="days-ones-box">
                            <div class="front">
                                <img src="img/blind-top.png" alt="Blindfolded woman" class="q-mark">
                            </div>
                            <div class="back">
                                <img src="img/blind-bottom.png" alt="Blindfolded woman" class="q-mark">
                            </div>
                        </div>
                    </div>
                    <div class="colon">
                        <span>:</span>
                    </div>`;