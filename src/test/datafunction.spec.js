import { filterData, sortData, computeStats } from "../src/dataFunctions.js";
import { data as dataFake } from "../data/dataset.js"

describe("filterData", () => {
  it("debe filtrar los pilotos por escudería - Williams", () => {
    const filteredData = filterData(dataFake, "team", "Williams");
    expect(filteredData.length).toBe(3);
  });

  it("debe filtrar los pilotos por escudería - Mercedes", () => {
    const filteredData = filterData(dataFake, "team", "Mercedes");
    expect(filteredData.length).toBe(2);
  });

  it("debe filtrar los pilotos por escudería - McLaren", () => {
    const filteredData = filterData(dataFake, "team", "McLaren");
    expect(filteredData.length).toBe(1);
  });
});


describe("sortData", () => {
  it("debe ordenar los pilotos de forma ascendente por nombre", () => {
    const sortedData = sortData(dataFake, "name", "asc");
    expect(sortedData).toEqual([...dataFake].sort((a, b) => a.name.localeCompare(b.name)));
  });
  it("debe ordenar los pilotos de forma descendente por nombre", () => {
    const sortedData = sortData(dataFake, "name", "desc");
    expect(sortedData).toEqual([...dataFake].sort((a, b) => b.name.localeCompare(a.name)));
  });
});


describe("computeStats", () => {
  it("debe calcular el promedio de podios correctamente", () => {
    const result = computeStats(dataFake);
    expect(typeof result).toBe("number");
  });
});