
function superbowlWin(array) {
    function win(rec) {
        return rec.result === "W"
    }

    const winObj = array.find(win)

    return winObj ? winObj.year : undefined
}