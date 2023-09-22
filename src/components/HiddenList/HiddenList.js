import React, { useState } from "react";

export function HiddenList(props) {
  const { header, subtitle, project, index } = props;
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    // const spans = document.querySelectorAll(
    //   "#advList .page-content ul li:nth-child(even)"
    // );

    // spans[index].classList.toggle("open");
    // spans[index].classList.toggle("open");
  };
  return (
    <>
      <section id="listElement" className="list-element">
        <div className="page-content">
          <div>
            <ul>
              <li>
                <span>
                  <strong
                    onClick={() => handleClick(index)}
                    className={activeIndex === index ? "open" : ""}
                  >
                    {header}
                  </strong>
                </span>
              </li>
              <li className={activeIndex === index ? "open" : ""}>
                <p>{subtitle}</p>
                <div className="element">{project}</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
