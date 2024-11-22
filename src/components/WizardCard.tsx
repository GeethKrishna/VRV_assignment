import React from "react";
import { X } from "lucide-react";

interface Wizard {
    id: string;
    name: string;
    date_of_joining: string;
    age: number;
    speciality: string;
    role: string;
    exp: number;
    spells_created: number;
}

interface WizardCardProps {
  wizard: Wizard;
  onClose: () => void;
}

const WizardCard: React.FC<WizardCardProps> = ({ wizard, onClose }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{wizard.name}</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 font-bold text-lg"
        >
          <X className="w-7 h-7 text-red-500 hover:bg-red-200 rounded-full p-1" />
        </button>
      </div>
      <p className="mt-2 text-gray-600">
        <strong>Role:</strong> {wizard.role}
      </p>
      <p className="mt-2 text-gray-600">
        <strong>Exp:</strong> {wizard.exp}
      </p>
      <p className="mt-2 text-gray-600">
        <strong>Speciality:</strong> {wizard.speciality}
      </p>
      <p className="mt-2 text-gray-600">
        <strong>Age:</strong> {wizard.age}
      </p>
      <p className="mt-2 text-gray-600">
        <strong>Date of Joining:</strong> {wizard.date_of_joining}
      </p>
      <p className="mt-2 text-gray-600">
        <strong>Number of Spells Created:</strong> {wizard.spells_created}
      </p>
    </div>
  );
};

export default WizardCard;
