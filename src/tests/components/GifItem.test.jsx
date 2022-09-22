import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe("GifItem tests", () => {
  const title = "titulo",
    url = "http://example.com/";
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  
  test("Debe de mostrar la imagen con la url indicada", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByRole("img").src).toBe(url);
  });

  test("Debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(title).toBeTruthy();
  });
  
});
