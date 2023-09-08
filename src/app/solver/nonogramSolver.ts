import { Nonogram } from "../../../public/allNonograms";
export default function solveNonogram(nonogram: Nonogram) {
  const rows = nonogram.rows;
  const columns = nonogram.columns;
  const width = columns.length;
  const height = rows.length;

  const rowsMap = new Map<number, number[][]>();
  const columnsMap = new Map<number, number[][]>();
  rows.forEach((row, index) => {
    rowsMap.set(index, generateCombinations(width, row));
  });
  columns.forEach((column, index) => {
    columnsMap.set(index, generateCombinations(height, column));
  });

  debugger;
}
function generateCombinations(size: number, content: number[]): number[][] {
  const results: number[][] = [];

  function generateHelper(
    current: number[],
    remainingContent: number[],
    currentIndex: number
  ) {
    if (currentIndex === size) {
      if (remainingContent.length === 0) {
        results.push([...current]);
      }
      return;
    }

    if (remainingContent.length === 0) {
      current.push(0);
      generateHelper(current, remainingContent, currentIndex + 1);
      current.pop();
    } else {
      // Try adding a filled cell
      let additionalEmptyCell = remainingContent.length > 1 ? 1 : 0; // only add an additional empty cell if there are more elements in remainingContent
      if (currentIndex + remainingContent[0] + additionalEmptyCell <= size) {
        for (let i = 0; i < remainingContent[0]; i++) {
          current.push(1);
        }
        if (additionalEmptyCell === 1) {
          // only add an additional empty cell if there are more elements in remainingContent
          current.push(0);
        }
        generateHelper(
          current,
          remainingContent.slice(1),
          currentIndex + remainingContent[0] + additionalEmptyCell
        );
        if (additionalEmptyCell === 1) {
          // only remove the additional empty cell if there are more elements in remainingContent
          current.pop();
        }
        for (let i = 0; i < remainingContent[0]; i++) {
          current.pop();
        }
      }

      // Try adding an empty cell
      current.push(0);
      generateHelper(current, remainingContent, currentIndex + 1);
      current.pop();
    }
  }

  generateHelper([], content, 0);

  return results;
}
