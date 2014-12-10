var Vector = {
    dot : function (vec1, vec2) {
        var prod = 0;

        var length = vec.length;
        for (var i = 0 ;i < length; i++ ) {
            prod += vec1[i] * vec2[i];
        }

        return prod;
    },
    cross : function (vec1, vec2) {
        if ((vec1.length != 3) || (vec2.length != 3) ) {
            return Number.NaN;
        }

        var prod = [];
        prod[0] = vec1[1] * vec2[2] - vec1[2] * vec2[1];
        prod[1] = vec1[2] * vec2[0] - vec1[0] * vec2[2];
        prod[2] = vec1[0] * vec2[1] - vec1[1] * vec2[0];

        return prod;
    },
    magnitude : function(vec) {
        var length = vec.length;
        var norm = 0;
        for (var i = 0 ;i < length; i++ ) {
            norm += vec[i] * vec[i];
        }

        return Math.sqrt(norm);
    },
    add : function (vec1, vec2) {
        var result = [];
        var length = vec1.length;
        for (var i = 0 ;i < length; i++ ) {
            result[i] = vec1[i] + vec2[i];
        }

        return result;
    },
    subtract : function (vec1, vec2) {
        var result = [];
        var length = vec1.length;
        for (var i = 0 ;i < length; i++ ) {
            result[i] = vec1[i] - vec2[i];
        }

        return result;
    },
    multiply : function(vec1, num) {
        var result = [];
        var length = vec1.length;
        for (var i = 0 ;i < length; i++ ) {
            result[i] = vec1[i] * num;
        }

        return result;
    },
    transpose : function(vec) {
        var out = [];
        for (var i = 0; i < vec.length; i++ ) {
            out[i] = [vec[i]];
        }

        return out;
    },
    zero : function(length ) {
        var result = [];
        for (var i = 0 ;i < length; i++ ) {
            result[i] = 0;
        }

        return result;
    },
    unit : function(length) {
        var result = [];
        for (var i = 0 ;i < length; i++ ) {
            result[i] = 1;
        }

        return result;
    }
};

var Matrix = {
    multiply : function(mat1, mat2) {
        if (Matrix.canMultiply == false ) {
            return null;
        }

        var out = [];
        for (var i = 0; i < mat1.length; i++) {
            var row = Vector.zero(mat1[i].length);
            console.log(row);
            for (var j = 0; j < mat1[i].length; j++) {
                for (var k = 0; k < mat2.length; k++ ) {
                    console.log(i + ", " + j + ", "+ k);
                    row[j] += mat1[i][k] * mat2[k][j];
                    console.log(row[k]);
                }
            }

            out[i] = row;
        }

        return out;
    },
    canMultiply: function(mat1, mat2) {
        var row_dimention = mat1[0][0].length;


        return row_dimention == mat2.length;
    },
    toString : function(mat) {
        var out = "";
        for (var i = 0; i < mat.length; i++) {
            var row = mat[i];
            out += "[";
            for (var j = 0; j < row.length; j++) {
                out += row[j];
                if (j != row.length - 1) {
                    out += ", ";
                }
            }
            out += "]\n";
        }

        return out;
    },
    zero : function(n, m) {
        var out = [];
        if (m == undefined) {
            m = n;
        }

        for (var i = 0; i < m; i++) {
            out[i] = Vector.zero(n);
        }
        return out;
    },
    identity : function(dimention) {
        var out = Matrix.zero(dimention, dimention);
        for (var i = 0; i < dimention; i++) {
            out[i][i] = 1;
        }

        return out;
    },
};
