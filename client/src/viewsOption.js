const viewOptions = [
  {
    subject: 'order',
    subjectName: '정렬',
    options: {
      'recent': '최신순', 
      'old': '과거순',
      'popular': '조회순',
      'like': '좋아요순'
    }
  },
  {
    subject: 'sex',
    subjectName: '성별',
    options: {
      1: '남성', 
      2: '여성',
    }
  },
  {
    subject: 'weather',
    subjectName: '날씨',
    options: {
      1: '비 오는 날', 
      2: '흐린 날',
      3: '눈 오는 날',
      4: '맑은 날',
    }
  },
  {
    subject: 'season',
    subjectName: '계절',
    options: {
      1: 'SS시즌', 
      2: 'FW시즌',
    }
  },
  {
    subject: 'style',
    subjectName: '스타일',
    options: {
      1: 'Casual', 
      2: 'Dandy',
      3: 'Street',
      4: 'Hiphop',
      5: 'Modern',
      6: 'Classic'
    }
  }
]

export default viewOptions