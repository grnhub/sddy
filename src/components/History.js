// DB Connect

const historyData = [
    {
        pno: '12345678',
        updateDate: '2019-10-01',
        rentDate: '2019-10-02',
        returnDate: '2019-10-05',
        returnMemo: '',
        repairDate: '2019-10-12',
        repairMemo: '그냥수리123',
        now: '2019-10-29'

    },
    {
        pno: '12325678',
        updateDate: '2019-10-01',
        rentDate: '2019-10-02',
        returnDate: '2019-10-05',
        returnMemo: '조아요ㅁㄴㅇㄹ',
        repairDate: '2019-10-12',
        repairMemo: '그냥수리',
        now: '2019-10-29'

    },
    {
        pno: '15151515',
        updateDate: '2019-09-01',
        rentDate: '2019-10-02',
        returnDate: '2019-10-05',
        returnMemo: '조아fffff요',
        repairDate: '2019-10-12',
        repairMemo: '갤럭시2를 수리했어여',
        now: '2019-10-29'

    },
    {
        pno: '22555333',
        updateDate: '2019-10-01',
        rentDate: '2019-10-02',
        returnDate: '2019-10-05',
        returnMemo: '조아요 우드1',
        repairDate: '2019-10-12',
        repairMemo: '우드 블루투스 굿',
        now: '2019-10-29'

    },
    {
        pno: '28355333',
        updateDate: '2019-10-01',
        rentDate: '2019-10-02',
        returnDate: '2019-10-05',
        returnMemo: '조아요 우드2',
        repairDate: '2019-10-12',
        repairMemo: '우드 블루투스2 굿',
        now: '2019-10-29'

    },
    {
        pno: '22555233',
        updateDate: '2019-10-01',
        rentDate: '2019-10-02',
        returnDate: '2019-10-05',
        returnMemo: '조아요 우드~',
        repairDate: '2019-10-12',
        repairMemo: '우드 블루투스3 굿',
        now: '2019-10-29'

    }
];

/** 수정해야됨 수정해야됨 */
function getHistory(pno) {
    var p = historyData.find((history) => {
        return history.pno === pno;
    })
    return p;
}

export default getHistory;