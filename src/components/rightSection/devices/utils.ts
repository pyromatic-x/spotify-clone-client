function extractNameFromLabel(str: string) {
  const regex = /\(([^)]+)\)/;
  const match = str.match(regex);

  if (match) {
    return match[0].slice(1).slice(0, -1);
  }

  return '';
}

export const getCurrentDevice = async () => {
  const _default = 'This computer';

  try {
    const devices = await navigator.mediaDevices.enumerateDevices();

    const audioOutputs = devices.filter((device) => device.kind === 'audiooutput');

    if (!audioOutputs.length) return _default;

    const active = audioOutputs.find((t) => t.deviceId === 'default');
    if (active) return extractNameFromLabel(active.label);

    return extractNameFromLabel(audioOutputs[0].label);
  } catch (error) {
    return _default;
  }
};
