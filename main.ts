function motor (speedL: number, speedR: number) {
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    Math.map(speedL, -1 * MOTOR_SPEED_MAX, MOTOR_SPEED_MAX, -1 * PMW_MAX, PMW_MAX),
    robotbit.Motors.M1A,
    Math.map(speedR, -1 * MOTOR_SPEED_MAX, MOTOR_SPEED_MAX, -1 * PMW_MAX, PMW_MAX)
    )
}
function searching () {
    let list: number[] = []
    if (list[0] >= SONAR_DISTANCE_NEAR && list[1] >= SONAR_DISTANCE_NEAR && list[2] >= SONAR_DISTANCE_NEAR) {
        motor(MOTOR_SPEED_BASE, MOTOR_SPEED_BASE)
    } else if (list[0] >= SONAR_DISTANCE_NEAR && list[1] >= SONAR_DISTANCE_NEAR && list[2] < SONAR_DISTANCE_NEAR) {
        motor(MOTOR_SPEED_BASE, MOTOR_SPEED_MIN)
        basic.pause(200)
    } else if (list[0] >= SONAR_DISTANCE_NEAR && list[1] < SONAR_DISTANCE_NEAR && list[2] >= SONAR_DISTANCE_NEAR) {
        motor(-1 * MOTOR_SPEED_BASE, -1 * MOTOR_SPEED_BASE)
        basic.pause(500)
        motor(MOTOR_SPEED_BASE, MOTOR_SPEED_MIN)
        basic.pause(200)
    } else if (list[0] >= SONAR_DISTANCE_NEAR && list[1] < SONAR_DISTANCE_NEAR && list[2] < SONAR_DISTANCE_NEAR) {
        motor(-1 * MOTOR_SPEED_BASE, MOTOR_SPEED_BASE)
        basic.pause(200)
    } else if (list[0] < SONAR_DISTANCE_NEAR && list[1] >= SONAR_DISTANCE_NEAR && list[2] >= SONAR_DISTANCE_NEAR) {
        motor(MOTOR_SPEED_MIN, MOTOR_SPEED_BASE)
        basic.pause(200)
    } else if (list[0] < SONAR_DISTANCE_NEAR && list[1] >= SONAR_DISTANCE_NEAR && list[2] < SONAR_DISTANCE_NEAR) {
        motor(MOTOR_SPEED_BASE, MOTOR_SPEED_BASE)
    } else if (list[0] < SONAR_DISTANCE_NEAR && list[1] < SONAR_DISTANCE_NEAR && list[2] >= SONAR_DISTANCE_NEAR) {
        motor(-1 * MOTOR_SPEED_BASE, -1 * MOTOR_SPEED_BASE)
        basic.pause(500)
        motor(MOTOR_SPEED_MIN, MOTOR_SPEED_BASE)
        basic.pause(200)
    } else {
        motor(MOTOR_SPEED_BASE, MOTOR_SPEED_MIN)
        basic.pause(500)
    }
}
function readSonar () {
    robotbit.Servo(robotbit.Servos.S1, SONAR_DEGREE_120)
    LADAR[0] = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    robotbit.Servo(robotbit.Servos.S1, SONAR_DEGREE_90)
    LADAR[1] = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    robotbit.Servo(robotbit.Servos.S1, SONAR_DEGREE_60)
    LADAR[2] = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
}
function testMotor () {
    motor(MOTOR_SPEED_MAX, MOTOR_SPEED_MIN)
    basic.pause(1000)
    motor(-1 * MOTOR_SPEED_MAX, MOTOR_SPEED_MIN)
    basic.pause(1000)
    motor(MOTOR_SPEED_MIN, MOTOR_SPEED_MAX)
    basic.pause(1000)
    motor(MOTOR_SPEED_MIN, -1 * MOTOR_SPEED_MAX)
    basic.pause(1000)
}
let LADAR: number[] = []
let SONAR_DISTANCE_NEAR = 0
let SONAR_DEGREE_120 = 0
let SONAR_DEGREE_90 = 0
let SONAR_DEGREE_60 = 0
let PMW_MAX = 0
let MOTOR_SPEED_MAX = 0
let MOTOR_SPEED_BASE = 0
let MOTOR_SPEED_MIN = 0
MOTOR_SPEED_MIN = 0
MOTOR_SPEED_BASE = 70
MOTOR_SPEED_MAX = 100
let PWM_MIN = 0
PMW_MAX = 255
SONAR_DEGREE_60 = 0
SONAR_DEGREE_90 = 0
SONAR_DEGREE_120 = 0
SONAR_DISTANCE_NEAR = 15
LADAR = [0, 0, 0]
basic.forever(function () {
    searching()
})
