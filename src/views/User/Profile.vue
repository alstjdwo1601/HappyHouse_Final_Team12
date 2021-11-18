<template>
    <div class="row">
	    <div class="col-lg-2"></div>
	    <div class="col-lg-8 p-5 m-3" style="background: white; border-radius: 16px">
            <form action="" id="signup-form" method="post">
                <h1>회원 정보</h1>
                <hr />
                <div class="form-group">
                    <label for="id">아이디</label>
                    <p id="info-id">${member.id}</p>
                </div>
                <div class="form-group">
                    <label for="password">비밀번호</label>
                    <p id="info-password">*****</p>
                </div>
                <div class="form-group">
                    <label for="name">이름</label>
                    <p id="info-name">${member.name}</p>
                </div>
                <div class="form-group">
                    <label for="address">주소</label>
                    <p id="info-address">${member.address}</p>
                </div>
                <div class="form-group">
                    <label for="tel">전화번호</label>
                    <p id="info-tel">${member.phone}</p>
                </div>
                <div class="container">
                    <div>
                        <label for="userHouseInfoList">관심 아파트 목록</label>
                        <div id="userHouseInfoResult">
                            <table id="info-house" class="table mt-1">
                                <thead>
                                    <tr>
                                        <th>아파트 이름</th>
                                        <th>주소</th>
                                        <th>최근거래금액</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody id="info-house-tbody"></tbody>
                            </table>
                        </div>
                    </div>
                                    
                    <div class="row form-group mt-2">
                        <button class="btn btn-outline-primary btn-lg btn-block" type="button" id="getDistanceBtn">출발지로부터의 최단 거리 구하기</button>
                        <div id="distanceResult">
                            <table class="table mt-1">
                                <tbody id="info-distance"></tbody>
                            </table>
                        </div>
                    </div>
                </div>          
                <div class="row form-group">
                    <div class="col">
                        <router-link to="/profile/1">
                            <button class="btn btn-outline-warning btn-lg btn-block" type="button" id="modifyBtn">정보 수정</button>
                        </router-link>
                    </div>
                    <div class="col">
                        <router-link to="/remove">
                            <button class="btn btn-outline-danger btn-lg btn-block" type="button" id="deleteBtn">회원 탈퇴</button>
                        </router-link>
                    </div>
                </div>
                <div class="form-group mt-2">
                    <button class="btn btn-success btn-lg btn-block" type="button" id="checkBtn" onclick="location.href='/'">확인 완료</button>
                </div>
            </form>
	    </div>
	    <div class="col-lg-2"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>