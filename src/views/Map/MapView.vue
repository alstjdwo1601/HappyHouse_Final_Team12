<template>
    <div>
        <section id="index_section">
			<div class="card col-sm-12 mt-1" style="min-height: 850px;">
				<div class="card-body">
					<button id="btnSearchTypeDong" type="button" class="btn btn-dark">지역(동)별 거래 검색</button>
					<button id="btnSearchTypeApt" type="button" class="btn btn-dark">아파트 별 거래 검색</button>
					<hr>
					<div id="search-bar-by-dong">
						시도 : 
						<select id="sido">
							<option value="0">선택</option>
						</select>
						구군 : 
						<select id="gugun">
							<option value="0">선택</option>
						</select>
						읍면동 : 
						<select id="dong">
							<option value="0">선택</option>
						</select>
						<button type="button" id="dongSearchBtn">검색</button>
					</div>
					<div id="search-bar-by-apt" style="display: none;">
						
						아파트 이름 : 
						<input id="aptname" type="text" placeholder="아파트 이름을 입력하세요">
						<button type="button" id="aptSearchBtn">검색</button>
					</div>
					<hr>
				    <div class="accordion" id="searchResult"></div>
				    <div id="map" style="width:100%;height:500px;"></div>
				
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
    data(){
        return {
            // 마커를 담을 배열입니다
            markers: [],
            map: null,
            root: "../",
        };
    },

    mounted(){
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement('script');
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src =
            'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=1f36115e847878579a1c20a59f5516e3&libraries';
            document.head.appendChild(script);
        }
    },
    
    methods: {
        initMap(){
            var mapContainer = document.getElementById("map"); // 지도를 표시할 div	
            var mapOption = {
                center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
                level: 3, // 지도의 확대 레벨
            };
    
            // 지도를 생성합니다
            this.map = new kakao.maps.Map(mapContainer, mapOption);
        },

        //검색 결과 목록과 마커를 표출하는 함수입니다
        displayMarkers(places) {
            var fragment = document.createDocumentFragment();
            var bounds = new kakao.maps.LatLngBounds();
            
            // 지도에 표시되고 있는 마커를 제거합니다
            this.removeMarker();
            for(var i=0; i<places.length; i++) {
                var placePosition = new kakao.maps.LatLng(places[i].lat, places[i].lng);
                var marker = this.addMarker(placePosition, i);
                var itemEl = this.getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다
                
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                bounds.extend(placePosition);
                // 마커와 검색결과 항목에 mouseover 했을때
                // 해당 장소에 인포윈도우에 장소명을 표시합니다
                // mouseout 했을 때는 인포윈도우를 닫습니다
                (function (marker, title, code, place) {
                    kakao.maps.event.addListener(marker, "click", function () {
                        this.displayInfowindow(marker, title, place);
                        console.log(title + " " + code);
                    });

                    kakao.maps.event.addListener(this.map, "click", function () {
                        console.log(this.customOverlay);
                        this.customOverlay.setMap(null);
                    });

                    itemEl.onmouseover = function () {
                        this.displayInfowindow(marker, title);
                    };

                    itemEl.onmouseout = function () {
                        this.customOverlay.setMap(null);
                    };
                })(marker, places[i].aptName, places[i].aptCode, places[i]);

                fragment.appendChild(itemEl);
            }
            // 마커를 생성하고 지도에 표시합니다 

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            this.map.setBounds(bounds);
        },

        //마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
        addMarker(position, idx) {
            var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png", // 마커 이미지 url, 스프라이트 이미지를 씁니다
            imageSize = new kakao.maps.Size(36, 37), // 마커 이미지의 크기
            imgOptions = {
                spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
                spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
                offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
            },
            markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
            marker = new kakao.maps.Marker({
                position: position, // 마커의 위치
                image: markerImage,
            });

            marker.setMap(this.map); // 지도 위에 마커를 표출합니다
            this.markers.push(marker); // 배열에 생성된 마커를 추가합니다

            return marker;
        },

        // 지도 위에 표시되고 있는 마커를 모두 제거합니다
        removeMarker() {
            for (var i = 0; i < this.markers.length; i++) {
                this.markers[i].setMap(null);
            }
            this.markers = [];
        },

        //검색결과 항목을 Element로 반환하는 함수입니다
        getListItem(index, place) {
            var el = document.createElement("li");
            var itemStr = `
                <span class="markerbg marker_${index + 1}></span>
                <div class="info"><h5>${place.aptName}</h5> <button>관심등록</button>
                <span>${place.sidoName} ${place.gugunName} ${place.dongName} ${place.jibun}</span>
            `;
            el.innerHTML = itemStr;
            el.className = "item";

            return el;
        },

        //검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
        //인포윈도우에 장소명을 표시합니다
        displayInfowindow(marker, title, place) {
            console.log(title);
            var content = `
                <div class="overlaybox">
                    <div class="boxtitle">${title}</div>
                    <div class="first"><img src="${this.root}/img/apt.png" style="width:247px; height:136px;" alt=""></div>
                    <ul>
                        <li class="up">
                            <span class="title">건축년도</span>
                            <span class="count">${place.buildYear}</span>
                        </li>
                        <li>
                            <span class="title">주소</span>
                            <span class="count">${place.sidoName} ${place.gugunName} ${place.dongName} ${place.jibun}</span>
                        </li>
                        <li>
                            <span class="title">최신거래금액</span>
                            <span class="count">${place.recentPrice}</span>
                        </li>
                        <li>
                            <span class="last" id="recenthistor" data-toggle="modal" data-target="#myModal">아파트정보 update</span>
                        </li>
                    </ul>
                </div>
            `;
            var position = new kakao.maps.LatLng(marker.getPosition().getLat()+0.00033, marker.getPosition().getLng()-0.00003);
            this.customOverlay = new kakao.maps.CustomOverlay({
                position: position,
                content: content,
                xAnchor: 0.3,
                yAnchor: 0.91,
            });
            this.customOverlay.setMap(this.map);
        },

        //검색결과 목록의 자식 Element를 제거하는 함수입니다
        removeAllChildNods(el) {
            while (el.hasChildNodes()) {
                el.removeChild(el.lastChild);
            }
        }
    }
};
</script>

<style>

</style>