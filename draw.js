/**
 * Created by msi on 24/02/2017.
 */

/**
 * Created by msi on 22/02/2017.
 */
exports.Draw = class {
    constructor(row, col) {
        this.col = col;
        this.row = row;
    }

    drawAll() {
        return true;
    }

    drawStar(rowIndex, colIndex) {
        if (rowIndex % 2 === 0) {
            return colIndex % 2 === 0;
        } else {
            return colIndex % 2 !== 0;
        }
    }

    drawBox(rowIndex, colIndex, row, col) {
        let thick = 2;
        return (rowIndex < thick || rowIndex >= row - thick || colIndex < thick || colIndex >= col - thick);
    }

    drawCross(rowIndex, colIndex) {
        return (rowIndex === colIndex);
    }

    drawCrossBox(rowIndex, colIndex, row, col) {
        return (rowIndex === colIndex || rowIndex < 1 || rowIndex === row - 1 || colIndex < 1 || colIndex === col - 1);
    }

    drawXBox(rowIndex, colIndex, row, col) {
        return (rowIndex === colIndex || rowIndex < 1 || rowIndex === row - 1 || colIndex < 1 || colIndex === col - 1
            || rowIndex === row - 1 - colIndex
        ); // do rowIndex chạy từ 0 nên row phải - 1
    }

    drawPlus(rowIndex, colIndex, row, col) {
        return (colIndex === col / 2 || colIndex === (col / 2) - 1 || rowIndex === row / 2 || rowIndex === (col / 2) - 1
            || colIndex === (col + 1) / 2 - 1 || rowIndex === (row + 1) / 2 - 1
        );
    }

    drawDiamond(rowIndex, colIndex, row, col) {
        let temp = (row - 1) / 2;
        return (rowIndex === temp - colIndex || colIndex === temp + rowIndex
            || rowIndex === temp + colIndex || colIndex === col + temp - 1 - rowIndex
        );
        //rowIndex === (row - 1) / 2 + colIndex duong cheo so 3
        //rowIndex === (row - 1) / 2 - colIndex duong cheo so 1
        //colIndex === (col - 1) / 2 + rowIndex duong cheo so 2
        //colIndex === col + (col - 1) / 2 - rowIndex duong cheo so 4
    }

    drawConnerBox(rowIndex, colIndex, row, col) {
        let length = 7;

        let halfLength = Math.floor(length / 2);
        //tru 1 vi mang chay tu 0
        let half = (row + 1) / 2 - 1;
        let temp = length - 1;
        return (rowIndex <= temp && colIndex === temp)
            || (colIndex <= temp && rowIndex === temp)
            || (rowIndex >= row - temp - 1 && colIndex === temp)
            || (rowIndex === row - temp - 1 && colIndex <= temp)
            || (colIndex >= col - temp - 1 && rowIndex === temp)
            || (colIndex === col - temp - 1 && rowIndex <= temp)
            || (rowIndex >= row - temp - 1 && colIndex === col - temp - 1)
            || (colIndex >= col - temp - 1 && rowIndex === row - temp - 1)
            //middle box
            // || (((rowIndex >= half - halfLength) && (rowIndex < half - halfLength +1 ))
            //     || ((rowIndex <= half + halfLength) && (rowIndex > half + halfLength -1 )))
            // && (((colIndex >= half - halfLength) && (colIndex < half - halfLength +1 ))
            //     || ((colIndex <= half + halfLength) && (colIndex > half + halfLength -1 ))
            || ((rowIndex >= half - halfLength) && (rowIndex <= half + halfLength)
            && (colIndex >= half - halfLength) && (colIndex <= half + halfLength))
            || rowIndex < 1 || rowIndex === row - 1 || colIndex < 1 || colIndex === col - 1

            ;
        // || (colIndex === half + 2 && rowIndex === half - 2)
        // || (colIndex === half - 2 && rowIndex === half - 2)
        // || (colIndex === half - 2 && rowIndex === half + 2)
        // || (colIndex === half + 2 && rowIndex === half + 2)

    }

    drawHouse(rowIndex, colIndex, row, col) {
        let temp = (row - 1) / 2;
        return (rowIndex === row - 1 || rowIndex === temp
            || rowIndex === temp - colIndex || colIndex === temp + rowIndex
            || (colIndex < 1 && rowIndex >= temp) || (colIndex === col - 1 && rowIndex >= temp)

        );
    }

    drawSailBoat(rowIndex, colIndex, row, col) {
        let temp = (row - 1) / 2;
        let half = Math.floor(temp / 2);

        return (
            rowIndex === temp
            //|| (rowIndex === temp + half && rowIndex === temp + colIndex)
            || (rowIndex === temp + colIndex && colIndex <= temp / 2)
            || (colIndex === col + temp - rowIndex - 1 && colIndex >= temp + half + 1)
            || (rowIndex === temp + half && colIndex > half && colIndex <= temp + half)
            || (colIndex === temp && rowIndex <= temp)
            || (rowIndex === temp - colIndex && colIndex >= half)
            || (rowIndex === colIndex && rowIndex > half && rowIndex < temp)
        );
    }

    drawLine(rowIndex, col, drawFunction) {
        let str = '';
        for (let colIndex = 0; colIndex < col; colIndex++) {
            str = str.concat(drawFunction(rowIndex, colIndex, this.row, col) ? '0 ' : '  ');
        }
        return str;
    }

    drawEverything() {
        let result = '';
        for (let i = 0; i < this.row; i++) {
            console.log(this.drawLine(i, this.col, this.drawHouse));
        }
        result += '\n';
        for (let i = 0; i < this.row; i++) {
            console.log(this.drawLine(i, this.col, this.drawBox));
        }
        result += '\n';
        for (let i = 0; i < this.row; i++) {
            console.log(this.drawLine(i, this.col, this.drawStar));
        }
        result += '\n';
        for (let i = 0; i < this.row; i++) {
            console.log(this.drawLine(i, this.col, this.drawConnerBox));
        }
        result += '\n';
        for (let i = 0; i < this.row; i++) {
            console.log(this.drawLine(i, this.col, this.drawDiamond));
        }
        result += '\n';
        for (let i = 0; i < this.row; i++) {
            console.log(this.drawLine(i, this.col, this.drawSailBoat));
        }
        result += '\n';
        for (let i = 0; i < this.row; i++) {
            console.log(this.drawLine(i, this.col, this.drawXBox));
        }
        result += '\n';
        return result;
    }
}

// let test = new Draw(41, 41);
// test.drawEverything();

