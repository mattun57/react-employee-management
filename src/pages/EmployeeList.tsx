import { useState } from "react";
import { employees, type Employee } from "../data/employees";
import { useNavigate } from "react-router-dom";
import "./EmployeeList.css";

export default function EmployeeList() {
  const [filters, setFilters] = useState({
    id: "",
    name: "",
    department: "",
    position: "",
    team: "",
    skill: "",
    experience: "",
  });

  const navigate = useNavigate();

  // フィルタリング処理
  const filteredEmployees = employees.filter((emp) => {
    const empName = emp.name.replace(/\s+/g, "");
    const empNameKana = emp.nameKana.replace(/\s+/g, "");
    const filterName = filters.name.replace(/\s+/g, "");
  
    return (
      (filters.id === "" || emp.id.toString().includes(filters.id)) &&
      (filterName === "" ||
        empName.includes(filterName) ||        
        empNameKana.includes(filterName)) &&   
      (filters.department === "" || emp.department.includes(filters.department)) &&
      (filters.position === "" || emp.position.includes(filters.position)) &&
      (filters.team === "" || emp.team.includes(filters.team)) &&
      (filters.skill === "" ||
        emp.skills.some((s) =>
          s.toLowerCase().includes(filters.skill.toLowerCase())
        )) &&
      (filters.experience === "" ||
        emp.experience.toString().includes(filters.experience))
    );
  });

  return (
    <div className="employee-list-container">
      <h2>社員管理システム</h2>

      <div className="filter-form">
        <input
          placeholder="社員番号を入力..."
          value={filters.id}
          onChange={(e) => setFilters({ ...filters, id: e.target.value })}
        />
        <input
          placeholder="名前を入力..."
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
        <select
          value={filters.department}
          onChange={(e) => setFilters({ ...filters, department: e.target.value })}
        >
          <option value="">部署を選択</option>
          {[...new Set(employees.map((e) => e.department))].map((dep) => (
            <option key={dep} value={dep}>{dep}</option>
          ))}
        </select>

        <select
          value={filters.position}
          onChange={(e) => setFilters({ ...filters, position: e.target.value })}
        >
          <option value="">役職を選択</option>
          {[...new Set(employees.map((e) => e.position))].map((pos) => (
            <option key={pos} value={pos}>{pos}</option>
          ))}
        </select>

        <select
          value={filters.team}
          onChange={(e) => setFilters({ ...filters, team: e.target.value })}
        >
          <option value="">チームを選択</option>
          {[...new Set(employees.map((e) => e.team))].map((team) => (
            <option key={team} value={team}>{team}</option>
          ))}
        </select>

        <select
          value={filters.experience}
          onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
        >
          <option value="">経験年数を選択</option>
          {[...new Set(employees.map((e) => e.experience))]
            .sort((a, b) => a - b)
            .map((exp) => (
              <option key={exp} value={exp}>{exp}年</option>
            ))}
        </select>
        <input
          placeholder="所有スキルを入力..."
          value={filters.skill}
          onChange={(e) => setFilters({ ...filters, skill: e.target.value })}
        />
      </div>

      {/* 社員テーブル */}
      <div className="table-wrapper">
        <table className="employee-table">
          <thead>
            <tr>
              <th>社員番号</th>
              <th>名前</th>
              <th>部署</th>
              <th>役職</th>
              <th>グループ</th>
              <th>経験年数</th>
              <th>所有スキル</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp: Employee) => (
              <tr
                key={emp.id}
                onClick={() => navigate(`/employee/${emp.id}`)}
              >
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>{emp.position}</td>
                <td>{emp.team}</td>
                <td>{emp.experience}年</td>
                <td>{emp.skills.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
