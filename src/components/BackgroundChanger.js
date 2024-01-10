import React from 'react';


const BackgroundChanger = ({ setBackground }) => {
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBackground(reader.result);
                localStorage.setItem('backgroundImage', reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            // 여기에 에러 처리 로직을 추가할 수 있습니다.
            alert('Invalid file type.');
        }
    };

    const handleChange = (event) => {
        setBackground(event.target.value);
        // 빈 값이 선택되면 기본 이미지로 돌아가므로 localStorage를 업데이트하지 않습니다.
        if (event.target.value) {
            localStorage.setItem('backgroundImage', event.target.value);
        }
    };
    return (
        <div>
            <input type="file" onChange={handleImageUpload} />
            <select onChange={handleChange}>
                <option value="">기본 이미지로 돌아가기</option>
                <option value="/img/img01.jpg">이미지 1</option> {/* 실제 이미지 URL로 변경 */}
                <option value="/img/img02.jpg">이미지 2</option> {/* 실제 이미지 URL로 변경 */}
                {/* 추가 이미지 옵션 */}
            </select>
        </div>
    );
};

export default BackgroundChanger;
