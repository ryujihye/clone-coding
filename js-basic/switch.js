//점수 50, 파랑

const score = 20;
const color = score > 50 ? 'blue' : 'red'; //조건을 만족하면 앞에 키, 아니면 뒤에 키

switch (color) {
    case 'red':
        console.log('빨강');
        break;
    case 'blue':
        console.log('파랑');
        break;
    default:
        console.log('빨강도 파랑도 아니얀');
        break;
}