import React, { useState } from "react";

type Role = "Novice" | "Master" | "Grandmaster";

type Permission = {
  category: string;
  actions: string[];
};

const PERMISSIONS: Permission[] = [
  { category: "Spells", actions: ["View", "Add", "Delete", "Modify"] },
  { category: "Members", actions: ["View", "Add", "Delete", "Modify"] },
];

const RolesComponent: React.FC = () => {
  const [rolePermissions, setRolePermissions] = useState<Record<Role, Record<string, boolean>>>({
    Novice: { "Spells-View": true },
    Master: { "Spells-View": true, "Spells-Add": true, "Spells-Delete": true },
    Grandmaster: Object.fromEntries(
      PERMISSIONS.flatMap(({ category, actions }) =>
        actions.map((action) => [`${category}-${action}`, true])
      )
    ),
  });

  const togglePermission = (role: Role, permission: string) => {
    setRolePermissions((prev) => ({
      ...prev,
      [role]: {
        ...prev[role],
        [permission]: !prev[role][permission],
      },
    }));
  };

  const renderPermissions = (role: Role) => (
    <div key={role} className="mt-4">
      <h2 className="text-lg font-semibold text-gray-700">{role} Permissions</h2>
      <div className="grid grid-cols-2 gap-4 mt-2">
        {PERMISSIONS.map(({ category, actions }) =>
          actions.map((action) => {
            const permissionKey = `${category}-${action}`;
            return (
              <div key={permissionKey} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`${role}-${permissionKey}`}
                  checked={!!rolePermissions[role][permissionKey]}
                  onChange={() => togglePermission(role, permissionKey)}
                  disabled={role === "Grandmaster"} // Grandmaster always has all permissions
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor={`${role}-${permissionKey}`} className="text-sm text-gray-600">
                  {category}: {action}
                </label>
              </div>
            );
          })
        )}
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Roles & Permissions</h1>
      {["Novice", "Master", "Grandmaster"].map((role) =>
        renderPermissions(role as Role)
      )}
    </div>
  );
};

export default RolesComponent;
