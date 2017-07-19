export default (code) => {
    switch(code) {
        case 48: // 0
        case '0':
            return '8'
            break;
        case 49: // 1
        case '1':
            return '7'
            break;
        case 50: // 2
        case '2':
            return '9'
            break;
        case 51: // 3
        case '3':
            return '0'
            break;
        case 52: // 4
        case '4':
            return '5'
            break;
        case 53: // 5
        case '5':
            return '6'
            break;
        case 54: // 6
        case '6':
            return '1'
            break;
        case 55: // 7
        case '7':
            return '2'
            break;
        case 56: // 8
        case '8':
            return '4'
            break;
        case 57: // 9
        case '9':
            return '3'
            break;
        case 65: // a
        case 'a':
        case 'A':
            return 'K'
            break;
        case 66: // b
        case 'b':
        case 'B':
            return 'A'
            break;
        case 67: // c
        case 'c':
        case 'C':
            return 'R'
            break;
        case 68: // d
        case 'd':
        case 'D':
            return 'Q'
            break;
        case 69: // e
        case 'e':
        case 'E':
            return 'N'
            break;
        case 70: // f
        case 'f':
        case 'F':
            return 'P'
            break;
        case 71: // g
        case 'g':
        case 'G':
            return 'W'
            break;
        case 72: // h
        case 'h':
        case 'H':
            return 'U'
            break;
        case 73: // i
        case 'i':
        case 'I':
            return 'F'
            break;
        case 74: // j
        case 'j':
        case 'J':
            return 'Y'
            break;
        case 75: // k
        case 'k':
        case 'K':
            return 'C'
            break;
        case 76: // l
        case 'l':
        case 'L':
            return 'X'
            break;
        case 77: // m
        case 'm':
        case 'M':
            return 'V'
            break;
        case 78: // n
        case 'n':
        case 'N':
            return 'L'
            break;
        case 79: // o
        case 'o':
        case 'O':
            return 'D'
            break;
        case 80: // p
        case 'p':
        case 'P':
            return 'H'
            break;
        case 81: // q
        case 'q':
        case 'Q':
            return 'S'
            break;
        case 82: // r
        case 'r':
        case 'R':
            return 'G'
            break;
        case 83: // s
        case 's':
        case 'S':
            return 'J'
            break;
        case 84: // t
        case 't':
        case 'T':
            return 'M'
            break;
        case 85: // u
        case 'u':
        case 'U':
            return 'I'
            break;
        case 86: // v
        case 'v':
        case 'V':
            return 'T'
            break;
        case 87: // w
        case 'w':
        case 'W':
            return 'O'
            break;
        case 88: // x
        case 'x':
        case 'X':
            return 'Z'
            break;
        case 89: // y
        case 'y':
        case 'Y':
            return 'Š'
            break;
        case 90: // z
        case 'z':
        case 'Z':
            return 'E'
            break;
        default:
            return '';
            break;

    };
};