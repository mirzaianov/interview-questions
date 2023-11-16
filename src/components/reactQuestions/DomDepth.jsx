import { useState, useRef } from 'react';

const DomDepth = () => {
  const [depth, setDepth] = useState(0);

  const ref = useRef(null);

  const treeDepth = (divElement, currentLevel) => {
    if (divElement.children.length === 0) return currentLevel;

    currentLevel += 1;

    let maxDepth = currentLevel;

    Array.from(divElement.children).forEach((element) => {
      maxDepth = Math.max(treeDepth(element, currentLevel), maxDepth);
    });

    return maxDepth;
  };

  const handleDepth = (target, lvl) => {
    const value = treeDepth(target, lvl);

    setDepth(value);
  };

  return (
    <div className="DomDepth component">
      <h3>6. The Dom Depth: </h3>
      <div
        className="depth"
        ref={ref}
      >
        <div>
          1
          <div>
            2
            <div>
              3
              <div>
                4
                <div>
                  5
                  <div>
                    6
                    <div>
                      7<div>8</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                4
                <div>
                  5
                  <div>
                    6
                    <div>
                      7
                      <div>
                        8
                        <div>
                          9
                          <div>
                            10
                            <div>
                              11
                              <div>
                                12
                                <div>
                                  13
                                  <div>14</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          1
          <div>
            2
            <div>
              3
              <div>
                4
                <div>
                  5
                  <div>
                    6
                    <div>
                      7
                      <div>
                        8
                        <div>
                          9<div>10</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => handleDepth(ref.current, 0)}>Tree Depth</button>
      <p>{depth}</p>
    </div>
  );
};

export default DomDepth;
