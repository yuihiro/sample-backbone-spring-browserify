package nagi.starter.SpringRest.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nagi.starter.SpringRest.repository.SensorRepository;
import nagi.starter.SpringRest.repository.vo.GameVo;
import nagi.starter.SpringRest.repository.vo.ResultVo;

@Service
public class SensorService {

	@Autowired
	SensorRepository repository;

	public List selectAll(int $limit) {
		return repository.selectAll($limit);
	}

	public ResultVo insertOne(GameVo vo) {
		return repository.insertOne(vo);
	}

	public ResultVo updateOne(GameVo vo) {
		return repository.updateOne(vo);
	}

	public ResultVo deleteOne(String idxs) {
		return repository.deleteOne(idxs);
	}

	public Map selectOne(int idx) {
		return repository.selectOneById(idx);
	}

}
