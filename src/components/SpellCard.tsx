import React from "react";
import { X } from "lucide-react";

interface Spell {
  name: string;
  date_of_creation: string;
  created_by: string;
  type: string;
  description: string;
  steps: string[];
  difficulty_level: string;
}

interface SpellCardProps {
  spell: Spell;
  onClose: () => void;
}

const SpellCard: React.FC<SpellCardProps> = ({ spell, onClose }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{spell.name}</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 font-bold text-lg"
        >
          <X className="w-7 h-7 text-red-500 hover:bg-red-200 rounded-full p-1" />
        </button>
      </div>
      <p className="mt-2 text-gray-600">
        <strong>Type:</strong> {spell.type}
      </p>
      <p className="mt-2 text-gray-600">
        <strong>Difficulty:</strong> {spell.difficulty_level}
      </p>
      <p className="mt-2 text-gray-600">
        <strong>Created By:</strong> {spell.created_by}
      </p>
      <p className="mt-2 text-gray-600">
        <strong>Date of Creation:</strong> {spell.date_of_creation}
      </p>
      <p className="mt-4 text-gray-800">
        <strong>Description:</strong> {spell.description}
      </p>
      <div className="mt-4">
        <strong>Steps:</strong>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          {spell.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpellCard;
