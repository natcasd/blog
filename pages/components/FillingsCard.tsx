import React, { useState, useRef, useEffect, ReactNode } from "react";
import { Tabs } from "@chakra-ui/react";

interface Filling {
  name: string;
  ingredients: [number, string][];
  instructions: string[];
}


const FillingsCard: React.FC<> = ({ fillings, multiplier }: { fillings: Filling[], multiplier: number }) => {
  const getScaledAmount = (baseAmount: number) => {
    return (baseAmount * multiplier / 8).toFixed(1);
  };

  return (
    <Tabs.Root lazyMount unmountOnExit defaultValue="tab-1">
      <Tabs.List>
        {fillings.map((filling, index) => (
          <Tabs.Trigger value={`tab-${index + 1} `}>
            {filling.name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <Tabs.ContentGroup>
        {fillings.map((filling, index) => (
          <Tabs.Content value={`tab-${index + 1}`} key={`tab-${index + 1}`}>\
          
            <h3 className="text-2xl font-semibold mb-4">{filling.name} Filling</h3>
            
            <h4 className="text-xl font-semibold mb-2">Ingredients:</h4>
            <ul className="list-disc list-inside mb-4">
              {filling.ingredients.map(([amount, ingredient], idx) => (
                <li key={idx}>
                  {getScaledAmount(amount)}{amount > 0 ? 'g ' : ' '}{ingredient}
                </li>
              ))}
            </ul>

            <h4 className="text-xl font-semibold mb-2">Instructions:</h4>
            <ol className="list-decimal list-inside">
              {filling.instructions.map((instruction, idx) => (
                <li key={idx} className="mb-2">{instruction}</li>
              ))}
            </ol>
          </Tabs.Content>
        ))}
      </Tabs.ContentGroup>
    </Tabs.Root>
   );
  };

export default FillingsCard;