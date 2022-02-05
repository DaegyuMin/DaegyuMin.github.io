
// 플러그인 등록
$.fn.objectMove = function(object) {

    // ToDo: 해당 객체가 animation 중이라면 cancel 한다.

    let new_left_pos = $(this).position().left + object['weight'];

    // 1초 동안 자연스럽게 left 의 위치를 지정된 위치로 변경
    $(this).animate({    
        left: new_left_pos
    }, 1000);
   
}

GetInfo = function() {

    let json_data = {
        "Filename": 321,
        "Dirname": 654,
        "Arch": 123,
        "Host": 456
    };

    return json_data;

}