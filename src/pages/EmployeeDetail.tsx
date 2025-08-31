import { useParams, useNavigate } from "react-router-dom";
import { employees } from "../data/employees";
import "./EmployeeDetail.css";

export default function EmployeeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const employee = employees.find((emp) => emp.id.toString() === id);

  if (!employee) {
    return (
      <div className="detail-container">
        <div className="detail-card">
          <p className="not-found">社員が見つかりません。</p>
          <button onClick={() => navigate(-1)} className="back-button">
            戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <div className="detail-card">
        <div className="detail-header">
          {/* ダミーアイコン */}
          <img
            src={`https://ui-avatars.com/api/?name=${employee.name}&background=0D8ABC&color=fff&size=128`}
            alt={employee.name}
            className="employee-avatar"
          />
          <h2 className="detail-title">{employee.name}</h2>
        </div>

        <div className="detail-info">
          <p><span>社員番号:</span> {employee.id}</p>
          <p><span>名前:</span> {employee.name}（{employee.nameKana}）</p>
          <p><span>部署:</span> {employee.department}</p>
          <p><span>役職:</span> {employee.position}</p>
          <p><span>グループ:</span> {employee.team}</p>
          <p><span>所有スキル:</span> {employee.skills.join(", ")}</p>
          <p><span>経験年数:</span> {employee.experience}年</p>
          <p><span>備考:</span> {employee.memo}</p>
        </div>

        <div className="detail-footer">
          <button onClick={() => navigate(-1)} className="back-button">
            戻る
          </button>
        </div>
      </div>
    </div>
  );
}
