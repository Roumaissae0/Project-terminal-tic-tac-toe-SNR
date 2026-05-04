import { checkRow, checkColumn, checkDiagonal } from '../status-checker.js';

describe('checkRow()', () => {

    test('returns true when the whole row belongs to the player', () => {
        const board = [
            ['X', 'X', 'X'],
            ['_', '_', '_'],
            ['_', '_', '_']
        ];
        
        expect(checkRow(board, 'X', 0)).toBe(true);
    });

    test('returns false when the row is not all X', () => {
        const board = [
            ['X', 'O', 'X'],
            ['_', '_', '_'],
            ['_', '_', '_']
        ];
        expect(checkRow(board, 'X', 0)).toBe(false);
    });

    test('returns false for empty row', () => {
        const board = [
            ['_', '_', '_'],
            ['_', '_', '_'],
            ['_', '_', '_']
        ];
        expect(checkRow(board, 'X', 0)).toBe(false);
    });
});

describe('checkColumn()', () => {
    test('returns true when a full column matches', () => {
        const board = [
            ['O', '_', '_'],
            ['O', 'X', '_'],
            ['O', '_', 'X']
        ];
        expect(checkColumn(board, 'O', 0)).toBe(true);
    });

    test('returns false when column is mixed', () => {
        const board = [
            ['X', '_', '_'],
            ['O', '_', '_'],
            ['X', '_', '_']
        ];
        expect(checkColumn(board, 'X', 0)).toBe(false);
    });
});

describe('checkDiagonal()', () => {
    test('recognises main diagonal win', () => {
        const board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['_', '_', 'X']
        ];
        expect(checkDiagonal(board, 'X')).toBe(true);
    });

    test('recognises anti-diagonal win', () => {
        const board = [
            ['_', '_', 'O'],
            ['_', 'O', '_'],
            ['O', '_', '_']
        ];
        expect(checkDiagonal(board, 'O')).toBe(true);
    });

    test('returns false when no full diagonal', () => {
        const board = [
            ['X', '_', '_'],
            ['_', 'O', '_'],
            ['_', '_', '_']
        ];
        expect(checkDiagonal(board, 'X')).toBe(false);
    });
});