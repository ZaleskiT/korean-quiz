export interface Vocabulary {
    id: number;
    categoryId: number;
    englishWord: string;
    koreanWord: string;
  }
  
  export enum Category {
    StandaloneWords = 1,
    L1P1,
    L1P2,
    L1P3,
    L1P4,
    L1P5,
    L1P6,
    L1P7
  }
  
  export const vocabularyList: Vocabulary[] = [
    { id: 1, categoryId: Category.StandaloneWords, englishWord: 'Hello', koreanWord: '안녕하세요' },
    { id: 2, categoryId: Category.StandaloneWords, englishWord: 'Teeth', koreanWord: '이' },
    { id: 3, categoryId: Category.StandaloneWords, englishWord: 'Cucumber', koreanWord: '오이' },
    { id: 4, categoryId: Category.StandaloneWords, englishWord: 'Man\'s younger brother', koreanWord: '아우' },
    { id: 5, categoryId: Category.StandaloneWords, englishWord: 'Kid', koreanWord: '아이' },
    { id: 6, categoryId: Category.StandaloneWords, englishWord: 'Singer', koreanWord: '가수' },
    { id: 7, categoryId: Category.StandaloneWords, englishWord: 'Meat', koreanWord: '고기' },
    { id: 8, categoryId: Category.StandaloneWords, englishWord: 'Shoe', koreanWord: '구두' },
    { id: 9, categoryId: Category.StandaloneWords, englishWord: 'Country', koreanWord: '나라' },
    { id: 10, categoryId: Category.StandaloneWords, englishWord: 'Tree', koreanWord: '나무' },
    { id: 11, categoryId: Category.StandaloneWords, englishWord: 'Leg', koreanWord: '다리' },
    { id: 12, categoryId: Category.StandaloneWords, englishWord: 'Radio', koreanWord: '라디오' },
    { id: 13, categoryId: Category.StandaloneWords, englishWord: 'Hair', koreanWord: '머리' },
    { id: 14, categoryId: Category.StandaloneWords, englishWord: 'Banana', koreanWord: '바나나' },
    { id: 15, categoryId: Category.StandaloneWords, englishWord: 'Pants', koreanWord: '바지' },
    { id: 16, categoryId: Category.StandaloneWords, englishWord: 'Cow', koreanWord: '소' },
    { id: 17, categoryId: Category.StandaloneWords, englishWord: 'Baby', koreanWord: '아기' },
    { id: 18, categoryId: Category.StandaloneWords, englishWord: 'Mother', koreanWord: '어머니' },
    { id: 19, categoryId: Category.StandaloneWords, englishWord: 'Map', koreanWord: '지도' },
    { id: 20, categoryId: Category.StandaloneWords, englishWord: 'Hat', koreanWord: '모자' },
    { id: 21, categoryId: Category.StandaloneWords, englishWord: 'Father (polite)', koreanWord: '아버지' },
    { id: 22, categoryId: Category.StandaloneWords, englishWord: 'Waist', koreanWord: '허리' },
    { id: 23, categoryId: Category.StandaloneWords, englishWord: 'Baseball', koreanWord: '야구' },
    { id: 24, categoryId: Category.StandaloneWords, englishWord: 'Palm Tree', koreanWord: '야자수' },
    { id: 25, categoryId: Category.StandaloneWords, englishWord: 'Story', koreanWord: '이야기' },
    { id: 26, categoryId: Category.StandaloneWords, englishWord: 'Woman', koreanWord: '여자' },
    { id: 27, categoryId: Category.StandaloneWords, englishWord: 'Rice plant', koreanWord: '벼' },
    { id: 28, categoryId: Category.StandaloneWords, englishWord: 'Tongue', koreanWord: '혀' },
    { id: 29, categoryId: Category.StandaloneWords, englishWord: 'Yoga', koreanWord: '요가' },
    { id: 30, categoryId: Category.StandaloneWords, englishWord: 'Cooking', koreanWord: '요리' },
    { id: 31, categoryId: Category.StandaloneWords, englishWord: 'Professor', koreanWord: '교수' },
    { id: 32, categoryId: Category.StandaloneWords, englishWord: 'Glass', koreanWord: '유리' },
    { id: 33, categoryId: Category.StandaloneWords, englishWord: 'Tissue', koreanWord: '휴지' },
    { id: 34, categoryId: Category.StandaloneWords, englishWord: 'Milk', koreanWord: '우유' },
    { id: 35, categoryId: Category.StandaloneWords, englishWord: 'Card', koreanWord: '카드' },
    { id: 36, categoryId: Category.StandaloneWords, englishWord: 'Nose', koreanWord: '코' },
    { id: 37, categoryId: Category.StandaloneWords, englishWord: 'Height', koreanWord: '키' },
    { id: 38, categoryId: Category.StandaloneWords, englishWord: 'Ostrich', koreanWord: '타조' },
    { id: 39, categoryId: Category.StandaloneWords, englishWord: 'Tomato', koreanWord: '토마토' },
    { id: 40, categoryId: Category.StandaloneWords, englishWord: 'Bull fighter', koreanWord: '투우사' },
    { id: 41, categoryId: Category.StandaloneWords, englishWord: 'Fly (insect)', koreanWord: '파리' },
    { id: 42, categoryId: Category.StandaloneWords, englishWord: 'Grape', koreanWord: '포도' },
    { id: 43, categoryId: Category.StandaloneWords, englishWord: 'Stamp', koreanWord: '우표' },
    { id: 44, categoryId: Category.StandaloneWords, englishWord: 'Tea', koreanWord: '차' },
    { id: 45, categoryId: Category.StandaloneWords, englishWord: 'Skirt', koreanWord: '치마' },
    { id: 46, categoryId: Category.StandaloneWords, englishWord: 'Pepper', koreanWord: '고추' },
    { id: 47, categoryId: Category.StandaloneWords, englishWord: 'Coffee', koreanWord: '커피' },
    { id: 48, categoryId: Category.StandaloneWords, englishWord: 'Coat', koreanWord: '코트' },
    { id: 49, categoryId: Category.StandaloneWords, englishWord: 'Train ticket', koreanWord: '기차표' },
    { id: 50, categoryId: Category.StandaloneWords, englishWord: 'Magpie', koreanWord: '까치' },
    { id: 51, categoryId: Category.StandaloneWords, englishWord: 'Tail', koreanWord: '꼬리' },
    { id: 52, categoryId: Category.StandaloneWords, englishWord: 'Elephant', koreanWord: '코끼리' },
    { id: 53, categoryId: Category.StandaloneWords, englishWord: 'Pick (fruit)', koreanWord: '따다' },
    { id: 54, categoryId: Category.StandaloneWords, englishWord: 'Float', koreanWord: '뜨다' },
    { id: 55, categoryId: Category.StandaloneWords, englishWord: 'Headband', koreanWord: '머리띠' },
    { id: 56, categoryId: Category.StandaloneWords, englishWord: 'Root', koreanWord: '뿌리' },
    { id: 57, categoryId: Category.StandaloneWords, englishWord: 'Bones', koreanWord: '뼈' },
    { id: 58, categoryId: Category.StandaloneWords, englishWord: 'Father (casual)', koreanWord: '아빠' },
    { id: 59, categoryId: Category.StandaloneWords, englishWord: 'Cheap', koreanWord: '싸다' },
    { id: 60, categoryId: Category.StandaloneWords, englishWord: 'Write', koreanWord: '쓰다' },
    { id: 61, categoryId: Category.StandaloneWords, englishWord: 'Middle-aged man', koreanWord: '아저씨' },
    { id: 62, categoryId: Category.StandaloneWords, englishWord: 'Steam', koreanWord: '찌다' },
    { id: 63, categoryId: Category.StandaloneWords, englishWord: 'Fake', koreanWord: '가짜' },
    { id: 64, categoryId: Category.StandaloneWords, englishWord: 'Ant', koreanWord: '개미' },
    { id: 65, categoryId: Category.StandaloneWords, englishWord: 'Ship', koreanWord: '배' },
    { id: 66, categoryId: Category.StandaloneWords, englishWord: 'Bird', koreanWord: '새' },
    { id: 67, categoryId: Category.StandaloneWords, englishWord: 'Sun', koreanWord: '해' },
    { id: 68, categoryId: Category.StandaloneWords, englishWord: 'Crab', koreanWord: '게' },
    { id: 69, categoryId: Category.StandaloneWords, englishWord: 'Wash face', koreanWord: '세수' },
    { id: 70, categoryId: Category.StandaloneWords, englishWord: 'Swing', koreanWord: '그네' },
    { id: 71, categoryId: Category.StandaloneWords, englishWord: 'Camera', koreanWord: '카메라' },
    { id: 72, categoryId: Category.StandaloneWords, englishWord: 'Talk', koreanWord: '얘기' },
    { id: 73, categoryId: Category.StandaloneWords, englishWord: 'Pretty', koreanWord: '예쁘다' },
    { id: 74, categoryId: Category.StandaloneWords, englishWord: 'Calligraphy', koreanWord: '서예' },
    { id: 75, categoryId: Category.StandaloneWords, englishWord: 'Clock', koreanWord: '시계' },
    { id: 76, categoryId: Category.StandaloneWords, englishWord: 'Snack', koreanWord: '과자' },
    { id: 77, categoryId: Category.StandaloneWords, englishWord: 'Dress shirt', koreanWord: '와이셔츠' },
    { id: 78, categoryId: Category.StandaloneWords, englishWord: 'Painter', koreanWord: '화가' },
    { id: 79, categoryId: Category.StandaloneWords, englishWord: 'Apple', koreanWord: '사과' },
    { id: 80, categoryId: Category.StandaloneWords, englishWord: 'What', koreanWord: '뭐' },
    { id: 81, categoryId: Category.StandaloneWords, englishWord: 'Give', koreanWord: '줘요' },
    { id: 82, categoryId: Category.StandaloneWords, englishWord: 'It\'s hot', koreanWord: '더워요' },
    { id: 83, categoryId: Category.StandaloneWords, englishWord: 'It\'s cold', koreanWord: '추워요' },
    { id: 84, categoryId: Category.StandaloneWords, englishWord: 'Pig', koreanWord: '돼지' },
    { id: 85, categoryId: Category.StandaloneWords, englishWord: 'Why', koreanWord: '왜' },
    { id: 86, categoryId: Category.StandaloneWords, englishWord: 'Waiter', koreanWord: '웨이터' },
    { id: 87, categoryId: Category.StandaloneWords, englishWord: 'Sweater', koreanWord: '스웨터' },
    { id: 88, categoryId: Category.StandaloneWords, englishWord: 'Beef', koreanWord: '소고기' },
    { id: 89, categoryId: Category.StandaloneWords, englishWord: 'Memorize', koreanWord: '외우다' },
    { id: 90, categoryId: Category.StandaloneWords, englishWord: 'Company', koreanWord: '회사' },
    { id: 91, categoryId: Category.StandaloneWords, englishWord: 'Brains', koreanWord: '두뇌' },
    { id: 92, categoryId: Category.StandaloneWords, englishWord: 'Ear', koreanWord: '귀' },
    { id: 93, categoryId: Category.StandaloneWords, englishWord: 'Rest', koreanWord: '쉬다' },
    { id: 94, categoryId: Category.StandaloneWords, englishWord: 'Rat', koreanWord: '쥐' },
    { id: 95, categoryId: Category.StandaloneWords, englishWord: 'Scissors', koreanWord: '가위' },
    { id: 96, categoryId: Category.StandaloneWords, englishWord: 'Doctor', koreanWord: '의사' },
    { id: 97, categoryId: Category.StandaloneWords, englishWord: 'Chair', koreanWord: '의자' },
    { id: 98, categoryId: Category.StandaloneWords, englishWord: 'Meeting', koreanWord: '회의' },
    { id: 99, categoryId: Category.StandaloneWords, englishWord: 'Watermelon', koreanWord: '수박' },
    { id: 100, categoryId: Category.StandaloneWords, englishWord: 'Book', koreanWord: '책' },
    { id: 101, categoryId: Category.StandaloneWords, englishWord: 'Money', koreanWord: '돈' },
    { id: 102, categoryId: Category.StandaloneWords, englishWord: 'Lemon', koreanWord: '레몬' },
    { id: 103, categoryId: Category.StandaloneWords, englishWord: 'Newspaper', koreanWord: '신문' },
    { id: 104, categoryId: Category.StandaloneWords, englishWord: 'Umbrella', koreanWord: '우산' },
    { id: 105, categoryId: Category.StandaloneWords, englishWord: 'Soon', koreanWord: '곧' },
    { id: 106, categoryId: Category.StandaloneWords, englishWord: 'Strawberry', koreanWord: '딸기' },
    { id: 107, categoryId: Category.StandaloneWords, englishWord: 'Water', koreanWord: '물' },
    { id: 108, categoryId: Category.StandaloneWords, englishWord: 'Foot', koreanWord: '발' },
    { id: 109, categoryId: Category.StandaloneWords, englishWord: 'Pencil', koreanWord: '연필' },
    { id: 110, categoryId: Category.StandaloneWords, englishWord: 'Bear', koreanWord: '곰' },
    { id: 111, categoryId: Category.StandaloneWords, englishWord: 'Man', koreanWord: '남자' },
    { id: 112, categoryId: Category.StandaloneWords, englishWord: 'Mother (casual)', koreanWord: '엄마' },
    { id: 113, categoryId: Category.StandaloneWords, englishWord: 'Computer', koreanWord: '컴퓨터' },
    { id: 114, categoryId: Category.StandaloneWords, englishWord: 'Cooked rice', koreanWord: '밥' },
    { id: 115, categoryId: Category.StandaloneWords, englishWord: 'Mouth', koreanWord: '입' },
    { id: 116, categoryId: Category.StandaloneWords, englishWord: 'Bag', koreanWord: '가방' },
    { id: 117, categoryId: Category.StandaloneWords, englishWord: 'Ball', koreanWord: '공' },
    { id: 118, categoryId: Category.StandaloneWords, englishWord: 'Refrigerator', koreanWord: '냉장고' },
    { id: 119, categoryId: Category.StandaloneWords, englishWord: 'Window', koreanWord: '창문' },
    { id: 120, categoryId: Category.StandaloneWords, englishWord: 'Kitchen', koreanWord: '부엌' },
    { id: 121, categoryId: Category.StandaloneWords, englishWord: 'Outside', koreanWord: '밖' },
    { id: 122, categoryId: Category.StandaloneWords, englishWord: 'Bottom', koreanWord: '밑' },
    { id: 123, categoryId: Category.StandaloneWords, englishWord: 'Comb', koreanWord: '빗' },
    { id: 124, categoryId: Category.StandaloneWords, englishWord: 'Clothes', koreanWord: '옷' },
    { id: 125, categoryId: Category.StandaloneWords, englishWord: 'Day', koreanWord: '낮' },
    { id: 126, categoryId: Category.StandaloneWords, englishWord: 'Flower', koreanWord: '꽃' },
    { id: 127, categoryId: Category.StandaloneWords, englishWord: 'Light', koreanWord: '빛' },
    { id: 128, categoryId: Category.StandaloneWords, englishWord: 'Knee', koreanWord: '무릎' },
    { id: 129, categoryId: Category.StandaloneWords, englishWord: 'Forest', koreanWord: '숲' },
    { id: 130, categoryId: Category.L1P1, englishWord: 'Name', koreanWord: '이름' },
    { id: 131, categoryId: Category.L1P1, englishWord: 'Job', koreanWord: '직업' },
    { id: 132, categoryId: Category.L1P1, englishWord: 'Nationality', koreanWord: '국적' },
    { id: 133, categoryId: Category.L1P1, englishWord: 'Which', koreanWord: '어느' },
    { id: 134, categoryId: Category.L1P1, englishWord: 'Country', koreanWord: '나라' },
    { id: 135, categoryId: Category.L1P1, englishWord: 'Person', koreanWord: '사람' },
    { id: 136, categoryId: Category.L1P1, englishWord: 'Korea', koreanWord: '한국' },
    { id: 137, categoryId: Category.L1P1, englishWord: 'Philippines', koreanWord: '필리핀' },
    { id: 138, categoryId: Category.L1P1, englishWord: 'USA', koreanWord: '미국' },
    { id: 139, categoryId: Category.L1P1, englishWord: 'Egypt', koreanWord: '이집트' },
    { id: 140, categoryId: Category.L1P1, englishWord: 'China', koreanWord: '중국' },
    { id: 141, categoryId: Category.L1P1, englishWord: 'Bangladesh', koreanWord: '방글라데시' },
    { id: 142, categoryId: Category.L1P1, englishWord: 'Teacher', koreanWord: '선생님' },
    { id: 143, categoryId: Category.L1P1, englishWord: 'Employee', koreanWord: '회사원' },
    { id: 144, categoryId: Category.L1P1, englishWord: 'English instructor', koreanWord: '영어강사' },
    { id: 145, categoryId: Category.L1P1, englishWord: 'Student', koreanWord: '학생' },
    { id: 146, categoryId: Category.L1P1, englishWord: 'Factory worker', koreanWord: '공장 직원' },
    { id: 147, categoryId: Category.L1P1, englishWord: 'Salesman', koreanWord: '판매원' },
    { id: 148, categoryId: Category.L1P1, englishWord: 'Housewife', koreanWord: '주부' },
    { id: 149, categoryId: Category.L1P1, englishWord: 'Elementary Student', koreanWord: '초등학생' },
    { id: 150, categoryId: Category.L1P1, englishWord: 'New York', koreanWord: '뉴욕' },
    { id: 151, categoryId: Category.L1P1, englishWord: 'English', koreanWord: '영어' },
    { id: 152, categoryId: Category.L1P1, englishWord: 'Korean', koreanWord: '한국어' },
    { id: 153, categoryId: Category.L1P2, englishWord: 'Company', koreanWord: '회사' },
    { id: 154, categoryId: Category.L1P2, englishWord: 'Dormitory', koreanWord: '기숙사' },
    { id: 155, categoryId: Category.L1P2, englishWord: 'Desk', koreanWord: '책상' },
    { id: 156, categoryId: Category.L1P2, englishWord: 'Chair', koreanWord: '의자' },
    { id: 157, categoryId: Category.L1P2, englishWord: 'Bed', koreanWord: '침대' },
    { id: 158, categoryId: Category.L1P2, englishWord: 'Computer', koreanWord: '컴퓨터' },
    { id: 159, categoryId: Category.L1P2, englishWord: 'Mobile phone', koreanWord: '휴대 전화' },
    { id: 160, categoryId: Category.L1P2, englishWord: 'Clock', koreanWord: '시계' },
    { id: 161, categoryId: Category.L1P2, englishWord: 'School', koreanWord: '학교' },
    { id: 162, categoryId: Category.L1P2, englishWord: 'Classroom', koreanWord: '교실' },
    { id: 163, categoryId: Category.L1P2, englishWord: 'Blackboard', koreanWord: '칠판' },
    { id: 164, categoryId: Category.L1P2, englishWord: 'Map', koreanWord: '지도' },
    { id: 165, categoryId: Category.L1P2, englishWord: 'Book', koreanWord: '책' },
    { id: 166, categoryId: Category.L1P2, englishWord: 'Pencil case', koreanWord: '필통' },
    { id: 167, categoryId: Category.L1P2, englishWord: 'Ballpoint pen', koreanWord: '볼펜' },
    { id: 168, categoryId: Category.L1P2, englishWord: 'Bathroom', koreanWord: '화장실' },
    { id: 169, categoryId: Category.L1P2, englishWord: 'Towel', koreanWord: '수건' },
    { id: 170, categoryId: Category.L1P2, englishWord: 'Mirror', koreanWord: '거울' },
    { id: 171, categoryId: Category.L1P2, englishWord: 'Tissue', koreanWord: '휴지' },
    { id: 172, categoryId: Category.L1P2, englishWord: 'Living room', koreanWord: '거실' },
    { id: 173, categoryId: Category.L1P2, englishWord: 'Air conditioner', koreanWord: '에어컨' },
    { id: 174, categoryId: Category.L1P2, englishWord: 'Sofa', koreanWord: '소파' },
    { id: 175, categoryId: Category.L1P2, englishWord: 'Kitchen', koreanWord: '부엌' },
    { id: 176, categoryId: Category.L1P2, englishWord: 'Dining table', koreanWord: '식탁' },
    { id: 177, categoryId: Category.L1P2, englishWord: 'Cup', koreanWord: '컵' },
    { id: 178, categoryId: Category.L1P2, englishWord: 'Refrigerator', koreanWord: '냉장고' },
    { id: 179, categoryId: Category.L1P2, englishWord: 'But', koreanWord: '하지만' },
    { id: 180, categoryId: Category.L1P2, englishWord: 'Wardrobe', koreanWord: '옷장' },
    { id: 181, categoryId: Category.L1P2, englishWord: 'And', koreanWord: '그리고' },
    { id: 182, categoryId: Category.L1P2, englishWord: 'There is', koreanWord: '있어요' },
    { id: 183, categoryId: Category.L1P2, englishWord: 'There isn\'t any', koreanWord: '없어요' },
    { id: 184, categoryId: Category.L1P2, englishWord: 'Remote control', koreanWord: '리모콘' },
    { id: 185, categoryId: Category.L1P2, englishWord: 'Room', koreanWord: '방' },
    { id: 186, categoryId: Category.L1P2, englishWord: 'Which one', koreanWord: '뭐가' },
    { id: 187, categoryId: Category.L1P2, englishWord: 'What is there', koreanWord: '뭐가 있어요' },
    { id: 188, categoryId: Category.L1P2, englishWord: 'I don\'t have something', koreanWord: '뭐가 없어요' },
    { id: 189, categoryId: Category.L1P2, englishWord: 'Faucet', koreanWord: '수도꼭지' },
    { id: 190, categoryId: Category.L1P2, englishWord: 'Tile', koreanWord: '타일' },
    { id: 191, categoryId: Category.L1P2, englishWord: 'However', koreanWord: '그런데' },
    { id: 192, categoryId: Category.L1P2, englishWord: '(in the)', koreanWord: '에' },
    { id: 193, categoryId: Category.L1P1, englishWord: 'Nice to meet you', koreanWord: '만나서 반가워요' },
    { id: 194, categoryId: Category.L1P3, englishWord: 'Cheap', koreanWord: '싸다' },
    { id: 195, categoryId: Category.L1P3, englishWord: 'Expensive', koreanWord: '비싸다' },
    { id: 196, categoryId: Category.L1P3, englishWord: 'Many', koreanWord: '많다' },
    { id: 197, categoryId: Category.L1P3, englishWord: 'Few', koreanWord: '적다' },
    { id: 198, categoryId: Category.L1P3, englishWord: 'Big', koreanWord: '크다' },
    { id: 199, categoryId: Category.L1P3, englishWord: 'Small', koreanWord: '작다' },
    { id: 200, categoryId: Category.L1P3, englishWord: 'Delicious', koreanWord: '맛있다' },
    { id: 201, categoryId: Category.L1P3, englishWord: 'Tasteless', koreanWord: '맛없다' },
    { id: 202, categoryId: Category.L1P3, englishWord: 'Difficult', koreanWord: '어렵다' },
    { id: 203, categoryId: Category.L1P3, englishWord: 'Easy', koreanWord: '쉽다' },
    { id: 204, categoryId: Category.L1P3, englishWord: 'Cold', koreanWord: '춥다' },
    { id: 205, categoryId: Category.L1P3, englishWord: 'Hot', koreanWord: '덥다' },
    { id: 206, categoryId: Category.L1P3, englishWord: 'Interesting', koreanWord: '재미있다' },
    { id: 207, categoryId: Category.L1P3, englishWord: 'Boring', koreanWord: '재미없다' },
    { id: 208, categoryId: Category.L1P3, englishWord: 'Good', koreanWord: '좋다' },
    { id: 209, categoryId: Category.L1P3, englishWord: 'Bad', koreanWord: '나쁘다' },
    { id: 210, categoryId: Category.L1P3, englishWord: 'Pretty', koreanWord: '예쁘다' },
    { id: 211, categoryId: Category.L1P3, englishWord: 'Busy', koreanWord: '바쁘다' },
    { id: 212, categoryId: Category.L1P3, englishWord: 'Sick', koreanWord: '아프다' },
    { id: 213, categoryId: Category.L1P3, englishWord: 'Hungry', koreanWord: '배가 고프다' },
    { id: 214, categoryId: Category.L1P3, englishWord: 'Cook hometown food', koreanWord: '고향 음식을 요리하다' },
    { id: 215, categoryId: Category.L1P3, englishWord: 'Read a book', koreanWord: '책을 읽다' },
    { id: 216, categoryId: Category.L1P3, englishWord: 'Study Korean', koreanWord: '한국어를 공부하다' },
    { id: 217, categoryId: Category.L1P3, englishWord: 'Watch TV', koreanWord: '텔레비전을 보다' },
    { id: 218, categoryId: Category.L1P3, englishWord: 'Drink coffee', koreanWord: '커피를 마시다' },
    { id: 219, categoryId: Category.L1P3, englishWord: 'Clean the room', koreanWord: '방을 청소하다' },
    { id: 220, categoryId: Category.L1P3, englishWord: 'Eat bread', koreanWord: '빵을 먹다' },
    { id: 221, categoryId: Category.L1P3, englishWord: 'Meet a friend', koreanWord: '친구를 만나다' },
    { id: 222, categoryId: Category.L1P3, englishWord: 'Buy clothes', koreanWord: '옷을 사다' },
    { id: 223, categoryId: Category.L1P3, englishWord: 'Work', koreanWord: '일하다' },
    { id: 224, categoryId: Category.L1P3, englishWord: 'Sleep', koreanWord: '자다' },
    { id: 225, categoryId: Category.L1P3, englishWord: 'Exercise', koreanWord: '운동하다' },
    { id: 226, categoryId: Category.L1P3, englishWord: 'Students', koreanWord: '학생들' },
    { id: 227, categoryId: Category.L1P3, englishWord: 'YouTube', koreanWord: '유튜브' },
    { id: 228, categoryId: Category.L1P3, englishWord: 'Hard hat', koreanWord: '안전모' },
    { id: 229, categoryId: Category.L1P3, englishWord: 'Tray', koreanWord: '쟁반' },
    { id: 230, categoryId: Category.L1P3, englishWord: 'Food', koreanWord: '음식' },
    { id: 231, categoryId: Category.L1P3, englishWord: 'Weather', koreanWord: '날씨' },
    { id: 232, categoryId: Category.L1P4, englishWord: 'School', koreanWord: '학교' },
    { id: 233, categoryId: Category.L1P4, englishWord: 'Convenience store', koreanWord: '편의점' },
    { id: 234, categoryId: Category.L1P4, englishWord: 'Company', koreanWord: '회사' },
    { id: 235, categoryId: Category.L1P4, englishWord: 'Bank', koreanWord: '은행' },
    { id: 236, categoryId: Category.L1P4, englishWord: 'House', koreanWord: '집' },
    { id: 237, categoryId: Category.L1P4, englishWord: 'Restaurant', koreanWord: '식당' },
    { id: 238, categoryId: Category.L1P4, englishWord: 'Cafe', koreanWord: '카페' },
    { id: 239, categoryId: Category.L1P4, englishWord: 'Hospital', koreanWord: '병원' },
    { id: 240, categoryId: Category.L1P4, englishWord: 'Pharmacy', koreanWord: '약국' },
    { id: 241, categoryId: Category.L1P4, englishWord: 'Market', koreanWord: '시장' },
    { id: 242, categoryId: Category.L1P4, englishWord: 'Mart', koreanWord: '마트' },
    { id: 243, categoryId: Category.L1P4, englishWord: 'Movie theater', koreanWord: '영화관' },
    { id: 244, categoryId: Category.L1P4, englishWord: 'Theater', koreanWord: '극장' },
    { id: 245, categoryId: Category.L1P4, englishWord: 'Department store', koreanWord: '백화점' },
    { id: 246, categoryId: Category.L1P4, englishWord: 'Korean sauna', koreanWord: '찜질방' },
    { id: 247, categoryId: Category.L1P4, englishWord: 'Gym', koreanWord: '헬스장' },
    { id: 248, categoryId: Category.L1P4, englishWord: 'Karaoke room', koreanWord: '노래방' },
    { id: 249, categoryId: Category.L1P4, englishWord: 'PC room', koreanWord: '피시방(PC방)' },
    { id: 250, categoryId: Category.L1P4, englishWord: 'Beauty salon', koreanWord: '미용실' },
    { id: 251, categoryId: Category.L1P4, englishWord: 'Laundromat', koreanWord: '빨래방' },
    { id: 252, categoryId: Category.L1P4, englishWord: 'Post office', koreanWord: '우체국' },
    { id: 253, categoryId: Category.L1P4, englishWord: 'Bookstore', koreanWord: '서점' },
    { id: 254, categoryId: Category.L1P4, englishWord: 'Company cafeteria', koreanWord: '회사 식당' },
    { id: 255, categoryId: Category.L1P4, englishWord: 'Staff cafeteria', koreanWord: '직원 식당' },
    { id: 256, categoryId: Category.L1P4, englishWord: 'Nearby', koreanWord: '근처' },
    { id: 257, categoryId: Category.L1P4, englishWord: 'Outside', koreanWord: '밖' },
    { id: 258, categoryId: Category.L1P4, englishWord: 'Park', koreanWord: '공원' },
    { id: 259, categoryId: Category.L1P4, englishWord: 'Very', koreanWord: '아주' },
    { id: 260, categoryId: Category.L1P4, englishWord: 'Husband', koreanWord: '남편' },
    { id: 261, categoryId: Category.L1P4, englishWord: 'Guitar', koreanWord: '기타' },
    { id: 262, categoryId: Category.L1P4, englishWord: 'Weekend', koreanWord: '주말' },
    { id: 263, categoryId: Category.L1P4, englishWord: 'Culture center', koreanWord: '문화 센터' },
    { id: 264, categoryId: Category.L1P4, englishWord: 'To learn', koreanWord: '배우다' },
    { id: 265, categoryId: Category.L1P5, englishWord: 'What month', koreanWord: '몇 월' },
    { id: 266, categoryId: Category.L1P5, englishWord: 'What day', koreanWord: '며칠' },
    { id: 267, categoryId: Category.L1P5, englishWord: 'Zero', koreanWord: '영/공' },
    { id: 268, categoryId: Category.L1P5, englishWord: 'One', koreanWord: '일' },
    { id: 269, categoryId: Category.L1P5, englishWord: 'Two', koreanWord: '이' },
    { id: 270, categoryId: Category.L1P5, englishWord: 'Three', koreanWord: '삼' },
    { id: 271, categoryId: Category.L1P5, englishWord: 'Four', koreanWord: '사' },
    { id: 272, categoryId: Category.L1P5, englishWord: 'Five', koreanWord: '오' },
    { id: 273, categoryId: Category.L1P5, englishWord: 'Six', koreanWord: '육' },
    { id: 274, categoryId: Category.L1P5, englishWord: 'Seven', koreanWord: '칠' },
    { id: 275, categoryId: Category.L1P5, englishWord: 'Eight', koreanWord: '팔' },
    { id: 276, categoryId: Category.L1P5, englishWord: 'Nine', koreanWord: '구' },
    { id: 277, categoryId: Category.L1P5, englishWord: 'Ten', koreanWord: '십' },
    { id: 278, categoryId: Category.L1P5, englishWord: 'Twenty', koreanWord: '이십' },
    { id: 279, categoryId: Category.L1P5, englishWord: 'Thirty', koreanWord: '삼십' },
    { id: 280, categoryId: Category.L1P5, englishWord: 'Today', koreanWord: '오늘' },
    { id: 281, categoryId: Category.L1P5, englishWord: 'Tomorrow', koreanWord: '내일' },
    { id: 282, categoryId: Category.L1P5, englishWord: 'Yesterday', koreanWord: '어제' },
    { id: 283, categoryId: Category.L1P5, englishWord: 'Last week', koreanWord: '지난주' },
    { id: 284, categoryId: Category.L1P5, englishWord: 'This week', koreanWord: '이번 주' },
    { id: 285, categoryId: Category.L1P5, englishWord: 'Next week', koreanWord: '다음 주' },
    { id: 286, categoryId: Category.L1P5, englishWord: 'Day of the week', koreanWord: '요일' },
    { id: 287, categoryId: Category.L1P5, englishWord: 'Monday', koreanWord: '월요일' },
    { id: 288, categoryId: Category.L1P5, englishWord: 'Tuesday', koreanWord: '화요일' },
    { id: 289, categoryId: Category.L1P5, englishWord: 'Wednesday', koreanWord: '수요일' },
    { id: 290, categoryId: Category.L1P5, englishWord: 'Thursday', koreanWord: '목요일' },
    { id: 291, categoryId: Category.L1P5, englishWord: 'Friday', koreanWord: '금요일' },
    { id: 292, categoryId: Category.L1P5, englishWord: 'Saturday', koreanWord: '토요일' },
    { id: 293, categoryId: Category.L1P5, englishWord: 'Sunday', koreanWord: '일요일' },
    { id: 294, categoryId: Category.L1P5, englishWord: 'Doctor', koreanWord: '의사' },
    { id: 295, categoryId: Category.L1P5, englishWord: 'Building', koreanWord: '빌딩' },
    { id: 296, categoryId: Category.L1P5, englishWord: '3rd floor, 17th room', koreanWord: '(3)층 (17)호' },
    { id: 297, categoryId: Category.L1P5, englishWord: 'Business card', koreanWord: '명함' },
    { id: 298, categoryId: Category.L1P6, englishWord: 'Zero', koreanWord: '영/공' },
    { id: 299, categoryId: Category.L1P6, englishWord: 'One', koreanWord: '하나' },
    { id: 300, categoryId: Category.L1P6, englishWord: 'Two', koreanWord: '둘' },
    { id: 301, categoryId: Category.L1P6, englishWord: 'Three', koreanWord: '셋' },
    { id: 302, categoryId: Category.L1P6, englishWord: 'Four', koreanWord: '넷' },
    { id: 303, categoryId: Category.L1P6, englishWord: 'Five', koreanWord: '다섯' },
    { id: 304, categoryId: Category.L1P6, englishWord: 'Six', koreanWord: '여섯' },
    { id: 305, categoryId: Category.L1P6, englishWord: 'Seven', koreanWord: '일곱' },
    { id: 306, categoryId: Category.L1P6, englishWord: 'Eight', koreanWord: '여덟' },
    { id: 307, categoryId: Category.L1P6, englishWord: 'Nine', koreanWord: '아홉' },
    { id: 308, categoryId: Category.L1P6, englishWord: 'Ten', koreanWord: '열' },
    { id: 309, categoryId: Category.L1P6, englishWord: 'Eleven', koreanWord: '열하나' },
    { id: 310, categoryId: Category.L1P6, englishWord: 'Twelve', koreanWord: '열둘' },
    { id: 311, categoryId: Category.L1P6, englishWord: 'Twenty', koreanWord: '스물' },
    { id: 312, categoryId: Category.L1P6, englishWord: 'Thirty', koreanWord: '서른' },
    { id: 313, categoryId: Category.L1P6, englishWord: 'Forty', koreanWord: '마흔' },
    { id: 314, categoryId: Category.L1P6, englishWord: 'Fifty', koreanWord: '쉰' },
    { id: 315, categoryId: Category.L1P6, englishWord: 'Sixty', koreanWord: '예순' },
    { id: 316, categoryId: Category.L1P6, englishWord: 'Seventy', koreanWord: '일흔' },
    { id: 317, categoryId: Category.L1P6, englishWord: 'Eighty', koreanWord: '여든' },
    { id: 318, categoryId: Category.L1P6, englishWord: 'Ninety', koreanWord: '아흔' },
    { id: 319, categoryId: Category.L1P6, englishWord: 'Hour', koreanWord: '시' },
    { id: 320, categoryId: Category.L1P6, englishWord: 'Minute', koreanWord: '분' },
    { id: 321, categoryId: Category.L1P6, englishWord: 'Half', koreanWord: '반' },
    { id: 322, categoryId: Category.L1P6, englishWord: 'To get up', koreanWord: '일어나다' },
    { id: 323, categoryId: Category.L1P6, englishWord: 'To wash one\'s face', koreanWord: '세수하다' },
    { id: 324, categoryId: Category.L1P6, englishWord: 'To put on clothes', koreanWord: '옷을 입다' },
    { id: 325, categoryId: Category.L1P6, englishWord: 'Morning', koreanWord: '아침' },
    { id: 326, categoryId: Category.L1P6, englishWord: 'Daytime', koreanWord: '낮' },
    { id: 327, categoryId: Category.L1P6, englishWord: 'Evening', koreanWord: '저녁' },
    { id: 328, categoryId: Category.L1P6, englishWord: 'Night', koreanWord: '밤' },
    { id: 329, categoryId: Category.L1P6, englishWord: 'Dawn', koreanWord: '새벽' },
    { id: 330, categoryId: Category.L1P6, englishWord: 'To meet a friend', koreanWord: '친구를 만나다' },
    { id: 331, categoryId: Category.L1P6, englishWord: 'To learn Korean', koreanWord: '한국어를 배우다' },
    { id: 332, categoryId: Category.L1P6, englishWord: 'To go to work', koreanWord: '출근하다' },
    { id: 333, categoryId: Category.L1P6, englishWord: 'To work', koreanWord: '일하다' },
    { id: 334, categoryId: Category.L1P6, englishWord: 'To leave work', koreanWord: '퇴근하다' },
    { id: 335, categoryId: Category.L1P6, englishWord: 'Tennis', koreanWord: '테니스' },
    { id: 336, categoryId: Category.L1P7, englishWord: 'Snack bar', koreanWord: '분식집' },
    { id: 337, categoryId: Category.L1P7, englishWord: 'Kimbap', koreanWord: '김밥' },
    { id: 338, categoryId: Category.L1P7, englishWord: 'Tteokbokki', koreanWord: '떡볶이' },
    { id: 339, categoryId: Category.L1P7, englishWord: 'Sundae (Korean blood sausage)', koreanWord: '순대' },
    { id: 340, categoryId: Category.L1P7, englishWord: 'Ramen', koreanWord: '라면' },
    { id: 341, categoryId: Category.L1P7, englishWord: 'Korean restaurant', koreanWord: '한식집' },
    { id: 342, categoryId: Category.L1P7, englishWord: 'Samgyetang (chicken soup with ginseng)', koreanWord: '삼계탕' },
    { id: 343, categoryId: Category.L1P7, englishWord: 'Bulgogi (marinated beef)', koreanWord: '불고기' },
    { id: 344, categoryId: Category.L1P7, englishWord: 'Samgyeopsal (pork belly)', koreanWord: '삼겹살' },
    { id: 345, categoryId: Category.L1P7, englishWord: 'Kimchi stew', koreanWord: '김치찌개' },
    { id: 346, categoryId: Category.L1P7, englishWord: 'Bibimbap (mixed rice with vegetables)', koreanWord: '비빔밥' },
    { id: 347, categoryId: Category.L1P7, englishWord: 'Doenjang stew (soybean paste stew)', koreanWord: '된장찌개' },
    { id: 348, categoryId: Category.L1P7, englishWord: 'Japanese restaurant', koreanWord: '일식집' },
    { id: 349, categoryId: Category.L1P7, englishWord: 'Sashimi', koreanWord: '생선회' },
    { id: 350, categoryId: Category.L1P7, englishWord: 'Sushi', koreanWord: '초밥' },
    { id: 351, categoryId: Category.L1P7, englishWord: 'Udon', koreanWord: '우동' },
    { id: 352, categoryId: Category.L1P7, englishWord: 'Tonkatsu (pork cutlet)', koreanWord: '돈가스' },
    { id: 353, categoryId: Category.L1P7, englishWord: 'Chinese restaurant', koreanWord: '중국집' },
    { id: 354, categoryId: Category.L1P7, englishWord: 'Jajangmyeon (black bean noodles)', koreanWord: '짜장면' },
    { id: 355, categoryId: Category.L1P7, englishWord: 'Jjamppong (spicy seafood noodle soup)', koreanWord: '짬뽕' },
    { id: 356, categoryId: Category.L1P7, englishWord: 'Dumplings', koreanWord: '만두' },
    { id: 357, categoryId: Category.L1P7, englishWord: 'Sweet and sour pork', koreanWord: '탕수육' },
    { id: 358, categoryId: Category.L1P7, englishWord: 'Italian restaurant', koreanWord: '이탈리아 식당' },
    { id: 359, categoryId: Category.L1P7, englishWord: 'Pizza', koreanWord: '피자' },
    { id: 360, categoryId: Category.L1P7, englishWord: 'Hamburger', koreanWord: '햄버거' },
    { id: 361, categoryId: Category.L1P7, englishWord: 'Spaghetti', koreanWord: '스파게티' },
    { id: 362, categoryId: Category.L1P7, englishWord: 'Salad', koreanWord: '샐러드' },
    { id: 363, categoryId: Category.L1P7, englishWord: 'To wait', koreanWord: '기다리다' },
    { id: 364, categoryId: Category.L1P7, englishWord: 'Side dishes', koreanWord: '반찬' },
    { id: 365, categoryId: Category.L1P7, englishWord: 'Spoon', koreanWord: '숟가락' },
    { id: 366, categoryId: Category.L1P7, englishWord: 'Chopsticks', koreanWord: '젓가락' },
    { id: 367, categoryId: Category.L1P7, englishWord: 'Bowl', koreanWord: '그릇' },
    { id: 368, categoryId: Category.L1P7, englishWord: 'To order', koreanWord: '주문하다' },
    { id: 369, categoryId: Category.L1P7, englishWord: 'Menu', koreanWord: '메뉴' },
    { id: 370, categoryId: Category.L1P7, englishWord: 'Write your name', koreanWord: '이름을 쓰세요' },
    { id: 371, categoryId: Category.L1P7, englishWord: 'Please give me more side dishes', koreanWord: '반찬 좀 더 주세요' },
    { id: 372, categoryId: Category.L1P7, englishWord: 'Please give me three servings of bulgogi', koreanWord: '불고기 3인분 주세요' },
    { id: 373, categoryId: Category.L1P7, englishWord: 'Please give me some water', koreanWord: '물 좀 주세요' }
  ];