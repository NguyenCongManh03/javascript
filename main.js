document.addEventListener('DOMContentLoaded', function () {
    var headphoneIcon = document.getElementById('headphone-icon');
    var audio = document.getElementById('audio');
  
    // Thêm sự kiện click cho biểu tượng headphone
    headphoneIcon.addEventListener('click', function () {
      // Kiểm tra trạng thái của âm thanh và thực hiện thao tác tương ứng
      if (audio.paused) {
        playAudio();
      } else {
        //pauseAudio();
      }
    });
  
    // Hàm để phát âm thanh
    function playAudio() {
      audio.play();
      // Bạn có thể thực hiện các thao tác khác khi âm thanh được phát
      //headphoneIcon.classList.add('playing'); // Ví dụ: Thêm class để thay đổi biểu tượng khi đang phát
    }
  
    // Hàm để tạm dừng âm thanh
    function pauseAudio() {
      audio.pause();
      // Bạn có thể thực hiện các thao tác khác khi âm thanh bị tạm dừng
      //headphoneIcon.classList.remove('playing'); // Ví dụ: Loại bỏ class để trở về trạng thái ban đầu
    }
  });
  